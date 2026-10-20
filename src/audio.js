// Generative ambience: a slow pad progression, soft bells, road hum, waves near the sea, cicadas in the countryside by day.
export function makeAudio() {
  const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return null;
  const ac = new AC(), master = ac.createGain(); master.gain.value = 0; master.connect(ac.destination);
  master.gain.linearRampToValueAtTime(0.5, ac.currentTime + 4);
  const len = ac.sampleRate * 4, ir = ac.createBuffer(2, len, ac.sampleRate);
  for (let ch = 0; ch < 2; ch++) { const d = ir.getChannelData(ch); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3); }
  const verb = ac.createConvolver(); verb.buffer = ir;
  const wet = ac.createGain(); wet.gain.value = 0.55; verb.connect(wet); wet.connect(master);
  const padLP = ac.createBiquadFilter(); padLP.type = 'lowpass'; padLP.frequency.value = 900; padLP.Q.value = 0.3;
  const padBus = ac.createGain(); padBus.gain.value = 0.11; padLP.connect(padBus); padBus.connect(master); padBus.connect(verb);
  const noiseBuf = (secs, brown) => {
    const b = ac.createBuffer(1, ac.sampleRate * secs, ac.sampleRate), d = b.getChannelData(0); let last = 0;
    for (let i = 0; i < d.length; i++) { if (brown) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; d[i] = last * 3.5; } else d[i] = Math.random() * 2 - 1; }
    return b;
  };
  const loop = (buf, filterType, freq) => {
    const s = ac.createBufferSource(); s.buffer = buf; s.loop = true;
    const f = ac.createBiquadFilter(); f.type = filterType; f.frequency.value = freq;
    const g = ac.createGain(); g.gain.value = 0; s.connect(f); f.connect(g); g.connect(master); s.start();
    return { f, g };
  };
  const road = loop(noiseBuf(2, true), 'lowpass', 400);
  const waves = loop(noiseBuf(3, false), 'lowpass', 700); waves.g.connect(verb);
  const cicada = loop(noiseBuf(2, false), 'bandpass', 5200); cicada.f.Q.value = 6;
  const rumble = loop(noiseBuf(2, true), 'lowpass', 240);
  const rainHiss = loop(noiseBuf(3, false), 'bandpass', 2600); rainHiss.f.Q.value = 0.35;
  const rainLow = loop(noiseBuf(2, true), 'lowpass', 520);
  const dropBuf = noiseBuf(0.03, false);
  let nextDrop = 0;
  function drop(t, v) { // a raindrop on the roof
    const s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
    s.buffer = dropBuf; f.type = 'bandpass'; f.frequency.value = 1800 + Math.random() * 2600; f.Q.value = 1.2;
    g.gain.setValueAtTime(v * (0.02 + Math.random() * 0.03), t); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.03);
    s.connect(f); f.connect(g); g.connect(master); s.start(t); s.stop(t + 0.04);
  }
  let nextKan = 0, nextClick = 0;
  function kan(t, v) { // the level-crossing bell: カンカンカン
    const o1 = ac.createOscillator(), o2 = ac.createOscillator(), g = ac.createGain(), bp = ac.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = 1150; bp.Q.value = 2.2;
    o1.type = 'square'; o1.frequency.value = 745; o2.type = 'triangle'; o2.frequency.value = 1490;
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.085 * v, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    o1.connect(bp); o2.connect(bp); bp.connect(g); g.connect(master); g.connect(verb);
    o1.start(t); o2.start(t); o1.stop(t + 0.33); o2.stop(t + 0.33);
  }
  function thump(t, v) { // wheels over rail joints: ta-tan
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(110, t); o.frequency.exponentialRampToValueAtTime(48, t + 0.12);
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.22 * v, t + 0.006); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.17);
    o.connect(g); g.connect(master); o.start(t); o.stop(t + 0.2);
  }
  const mtof = m => 440 * Math.pow(2, (m - 69) / 12);
  const CHORDS = [[48, 55, 64, 71, 74], [45, 52, 60, 67, 71], [41, 48, 57, 64, 67], [43, 50, 59, 62, 69], [40, 47, 55, 62, 67], [41, 48, 55, 64, 69]];
  const SCALE = [72, 74, 76, 79, 81, 84, 86, 88];
  let ci = 0, nextChord = ac.currentTime + 0.2, nextBell = ac.currentTime + 3;
  function chord(t) {
    const notes = CHORDS[ci++ % CHORDS.length], dur = 11;
    for (const m of notes) for (const det of [-5, 5]) {
      const o = ac.createOscillator(), g = ac.createGain();
      o.type = det < 0 ? 'sine' : 'triangle'; o.frequency.value = mtof(m); o.detune.value = det;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.18, t + 3.5); g.gain.setValueAtTime(0.18, t + dur - 4); g.gain.linearRampToValueAtTime(0, t + dur + 1);
      o.connect(g); g.connect(padLP); o.start(t); o.stop(t + dur + 1.2);
    }
  }
  function bell(t) {
    const m = SCALE[Math.floor(Math.random() * SCALE.length)], o = ac.createOscillator(), o2 = ac.createOscillator(), g = ac.createGain(), g2 = ac.createGain();
    o.type = o2.type = 'sine'; o.frequency.value = mtof(m); o2.frequency.value = mtof(m) * 2.01; g2.gain.value = 0.25; o2.connect(g2); g2.connect(g);
    g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(0.05, t + 0.02); g.gain.exponentialRampToValueAtTime(0.0001, t + 4);
    o.connect(g); g.connect(verb); g.connect(master); o.start(t); o2.start(t); o.stop(t + 4.2); o2.stop(t + 4.2);
  }
  return {
    ac, muted: false,
    update(sp, w, day, x = {}) {
      const t = ac.currentTime;
      if ((x.bell || 0) > 0.01) { if (nextKan < t) nextKan = t + 0.02; while (nextKan < t + 0.12) { kan(nextKan, x.bell); nextKan += 0.41; } }
      const rv = x.rain || 0;
      rainHiss.g.gain.setTargetAtTime(rv * 0.05, t, 0.6); rainLow.g.gain.setTargetAtTime(rv * 0.05, t, 0.6);
      if (rv > 0.05 && x.roof) { if (nextDrop < t) nextDrop = t + 0.02; while (nextDrop < t + 0.12) { drop(nextDrop, rv); nextDrop += 0.04 + Math.random() * 0.12 / rv; } }
      const tv = x.train || 0;
      rumble.g.gain.setTargetAtTime(tv * 0.16, t, 0.2);
      if (tv > 0.04) { if (nextClick < t) nextClick = t + 0.02; while (nextClick < t + 0.12) { thump(nextClick, tv); thump(nextClick + 0.15, tv * 0.8); nextClick += 1.2; } }
      while (nextChord < t + 1) { chord(nextChord); nextChord += 8; }
      if (nextBell < t + 0.5) { bell(nextBell); nextBell += 1.5 + Math.random() * 4.5; }
      road.g.gain.setTargetAtTime(0.03 + sp * 0.06, t, 0.5); road.f.frequency.setTargetAtTime(250 + sp * 500, t, 0.5);
      const swell = 0.5 + 0.5 * Math.sin(t * 0.55) * Math.sin(t * 0.21 + 1);
      waves.g.gain.setTargetAtTime(w.coast * (0.012 + swell * 0.05), t, 0.3); waves.f.frequency.setTargetAtTime(400 + swell * 900, t, 0.3);
      const chirp = 0.5 + 0.5 * Math.sin(t * 7.0) * Math.sin(t * 0.4);
      cicada.g.gain.setTargetAtTime((w.country + w.sakura * 0.3) * day * 0.006 * chirp, t, 0.08);
    },
    toggle() { this.muted = !this.muted; master.gain.setTargetAtTime(this.muted ? 0 : 0.5, ac.currentTime, 0.3); },
  };
}
