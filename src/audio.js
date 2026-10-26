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
  const tyres = loop(noiseBuf(2, false), 'bandpass', 1500); tyres.f.Q.value = 0.7; // tyres on a wet road: a hiss that grows with speed
  // the car's own engine, heard from behind: a small three-cylinder's low hum (firing frequency + its octave, softened),
  // quiet at a steady cruise, rising and fuller as it pulls away
  const engF = ac.createBiquadFilter(), engG = ac.createGain(), eng = ac.createOscillator(), eng2 = ac.createOscillator(), eng2G = ac.createGain();
  eng.type = 'sawtooth'; eng2.type = 'triangle'; engF.type = 'lowpass'; engF.frequency.value = 320; engF.Q.value = 0.6; engG.gain.value = 0; eng2G.gain.value = 0.5;
  eng.connect(engF); eng2.connect(eng2G); eng2G.connect(engF); engF.connect(engG); engG.connect(master); eng.start(); eng2.start();
  const stream = loop(noiseBuf(3, false), 'bandpass', 750); stream.f.Q.value = 0.6;
  const wind = loop(noiseBuf(3, true), 'lowpass', 420); // wind through the trees in the mountains
  const hum = loop(noiseBuf(2, true), 'lowpass', 140);   // a tunnel's jet fans and rolling echo
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
  // ---- creatures: sparrows, the bush warbler (ホーホケキョ), crows, gulls, frogs, crickets, a bicycle bell
  const life = ac.createGain(); life.gain.value = 1; life.connect(master); const lifeVerb = ac.createGain(); lifeVerb.gain.value = 0.35; life.connect(lifeVerb); lifeVerb.connect(verb);
  const out = (pan = (Math.random() - 0.5) * 1.4) => { if (!ac.createStereoPanner) return life; const n = ac.createStereoPanner(); n.pan.value = pan; n.connect(life); return n; };
  function note(t, f0, f1, dur, vol, dest, type = 'sine', vib = 0) {
    const o = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.setValueAtTime(f0, t); o.frequency.exponentialRampToValueAtTime(f1, t + dur);
    if (vib) { const l = ac.createOscillator(), lg = ac.createGain(); l.frequency.value = vib; lg.gain.value = f0 * 0.012; l.connect(lg); lg.connect(o.frequency); l.start(t); l.stop(t + dur + 0.05); }
    g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(vol, t + Math.min(0.04, dur * 0.25)); g.gain.setValueAtTime(vol, t + dur * 0.7); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g); g.connect(dest); o.start(t); o.stop(t + dur + 0.02);
    return g;
  }
  function sparrow(t, v) {
    const d = out(), n = 2 + Math.floor(Math.random() * 4), base = 3200 + Math.random() * 1500;
    for (let i = 0; i < n; i++) { const s = t + i * (0.09 + Math.random() * 0.07); note(s, base, base * (1.2 + Math.random() * 0.3), 0.06, v * 0.022, d); }
  }
  function uguisu(t, v) { // hoo… ho-ke-kyo
    const d = out(); note(t, 1120, 1390, 1.0, v * 0.03, d, 'sine', 5.5);
    note(t + 1.15, 2350, 2150, 0.14, v * 0.03, d); note(t + 1.32, 1700, 1520, 0.13, v * 0.028, d); note(t + 1.5, 2750, 2480, 0.36, v * 0.032, d);
  }
  function crow(t, v) {
    const d = out(), n = 1 + Math.floor(Math.random() * 3);
    for (let i = 0; i < n; i++) {
      const s = t + i * 0.48, o = ac.createOscillator(), bp = ac.createBiquadFilter(), g = ac.createGain();
      o.type = 'sawtooth'; o.frequency.setValueAtTime(560, s); o.frequency.exponentialRampToValueAtTime(420, s + 0.32);
      bp.type = 'bandpass'; bp.frequency.value = 1150; bp.Q.value = 1.6;
      g.gain.setValueAtTime(0.0001, s); g.gain.linearRampToValueAtTime(v * 0.03, s + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, s + 0.36);
      o.connect(bp); bp.connect(g); g.connect(d); o.start(s); o.stop(s + 0.4);
    }
  }
  function gull(t, v) { const d = out(), n = 2 + Math.floor(Math.random() * 2); for (let i = 0; i < n; i++) note(t + i * 0.42, 1750, 1150, 0.36, v * 0.022, d, 'triangle', 11); }
  function frog(t, v) { // one croak: a short buzzy pulse train
    const d = out(), o = ac.createOscillator(), bp = ac.createBiquadFilter(), g = ac.createGain(), f = 240 + Math.random() * 220, n = 5 + Math.floor(Math.random() * 4);
    o.type = 'square'; o.frequency.value = f; bp.type = 'bandpass'; bp.frequency.value = f * 2.4; bp.Q.value = 3;
    g.gain.setValueAtTime(0.0001, t);
    for (let i = 0; i < n; i++) { const s = t + i * 0.038; g.gain.linearRampToValueAtTime(v * 0.014, s + 0.008); g.gain.linearRampToValueAtTime(0.0001, s + 0.028); }
    o.connect(bp); bp.connect(g); g.connect(d); o.start(t); o.stop(t + n * 0.038 + 0.05);
  }
  function cricket(t, v) { const d = out(), f = 4300 + Math.random() * 700; for (let i = 0; i < 3; i++) note(t + i * 0.055, f, f * 1.01, 0.035, v * 0.009, d); }
  function templeBell(t, v) { // a distant temple bell: a low hum with long, beating partials
    const d = out(0);
    for (const [f, k, dur] of [[98, 1, 9], [196.6, 0.5, 6], [263.4, 0.3, 4.5], [391, 0.16, 3]]) {
      const o = ac.createOscillator(), g = ac.createGain(); o.type = 'sine'; o.frequency.value = f; o.detune.value = (Math.random() - 0.5) * 8;
      g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(v * 0.05 * k, t + 0.03); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g); g.connect(d); o.start(t); o.stop(t + dur + 0.1);
    }
  }
  function bikeBell(t, v) { const d = out(); for (const s of [t, t + 0.22]) { note(s, 2650, 2600, 0.5, v * 0.018, d); note(s, 3950, 3900, 0.35, v * 0.008, d); } }
  const nextLife = { sparrow: 2, uguisu: 6, crow: 8, gull: 3, frog: 1, cricket: 1, bike: 30, bell: 25 };
  const every = rate => (rate > 1e-4 ? -Math.log(1 - Math.random() * 0.98) / rate : 1e9);
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
    ac, muted: false, tyres, engG, // (for tests)
    bump(v) { thump(ac.currentTime + 0.01, v); }, // the car's wheels over rails
    update(sp, w, day, x = {}) {
      const t = ac.currentTime;
      if ((x.bell || 0) > 0.01) { if (nextKan < t) nextKan = t + 0.02; while (nextKan < t + 0.12) { kan(nextKan, x.bell); nextKan += 0.41; } }
      const rv = x.rain || 0;
      rainHiss.g.gain.setTargetAtTime(rv * 0.05, t, 0.6); rainLow.g.gain.setTargetAtTime(rv * 0.05, t, 0.6);
      // wet tyres: the swish of water under the tyres, through the rain and for as long as the road stays wet after it,
      // louder and higher the faster we go (with a slow wobble as the water film thickens and thins)
      const wr = (x.wetRoad || 0) * Math.min(1, sp) ** 1.5, film = 0.8 + 0.2 * Math.sin(t * 2.3) * Math.sin(t * 0.9 + 1);
      tyres.g.gain.setTargetAtTime(wr * 0.045 * film, t, 0.4); tyres.f.frequency.setTargetAtTime(900 + 1500 * Math.min(sp, 2), t, 0.4);
      if (rv > 0.05 && x.roof) { if (nextDrop < t) nextDrop = t + 0.02; while (nextDrop < t + 0.12) { drop(nextDrop, rv); nextDrop += 0.04 + Math.random() * 0.12 / rv; } }
      const wv = x.water || 0, gurgle = 0.6 + 0.4 * Math.sin(t * 1.3) * Math.sin(t * 0.37);
      stream.g.gain.setTargetAtTime(wv * 0.035 * gurgle, t, 0.25); stream.f.frequency.setTargetAtTime(600 + 400 * gurgle, t, 0.25);
      const gust = 0.35 + 0.65 * Math.pow(0.5 + 0.5 * Math.sin(t * 0.23) * Math.sin(t * 0.071 + 2), 2);
      const rush = x.rush || 0; // driving very fast: a steady rush of wind
      wind.g.gain.setTargetAtTime(((w.mountain || 0) + (w.snow || 0) * 0.7 + (w.uchisar || 0) * 0.55) * 0.06 * gust + rush * 0.055, t, 0.8); wind.f.frequency.setTargetAtTime(260 + 420 * gust + rush * 500, t, 0.8); // (and Cappadocia's steppe breeze, W5)
      const tv = x.train || 0;
      rumble.g.gain.setTargetAtTime(tv * 0.16, t, 0.2);
      if (tv > 0.04) { if (nextClick < t) nextClick = t + 0.02; while (nextClick < t + 0.12) { thump(nextClick, tv); thump(nextClick + 0.15, tv * 0.8); nextClick += 1.2; } }
      while (nextChord < t + 1) { chord(nextChord); nextChord += 8; }
      if (nextBell < t + 0.5) { bell(nextBell); nextBell += 1.5 + Math.random() * 4.5; }
      const tun = x.tunnel || 0;
      { // engine: a CVT keeps the revs low and steady at a cruise; they rise with speed and jump when pulling away
        const v = x.speed || 0, load = x.load || 0, rpm = 850 + 2400 * (1 - Math.exp(-v / 15)) + Math.max(0, v - 25) * 60 + load * 1300;
        const ff = rpm / 40; // 3 cylinders, 4 strokes: 1.5 firings per revolution
        eng.frequency.setTargetAtTime(ff, t, 0.25); eng2.frequency.setTargetAtTime(ff * 2, t, 0.25);
        engF.frequency.setTargetAtTime(200 + rpm * 0.08 + load * 260, t, 0.3);
        engG.gain.setTargetAtTime((0.008 + 0.01 * Math.min(1, v / 15) + 0.024 * load) * (1 - 0.6 * (x.rush || 0)) * (x.roof === false ? 0.5 : 1) * (1 + 0.7 * tun), t, 0.3);
      }
      road.g.gain.setTargetAtTime((0.03 + sp * 0.06) * (1 + 1.6 * tun), t, 0.35); road.f.frequency.setTargetAtTime((250 + sp * 500) * (1 + 0.5 * tun), t, 0.35);
      hum.g.gain.setTargetAtTime(tun * 0.07, t, 0.4); wet.gain.setTargetAtTime(0.55 + 0.6 * tun, t, 0.4);
      const swell = 0.5 + 0.5 * Math.sin(t * 0.55) * Math.sin(t * 0.21 + 1);
      const sea = w.coast + (w.bosphorus || 0) + 0.6 * (w.galata || 0); // (the coast's surf, the Bosphorus's water against its wall, the Golden Horn's under the bridge)
      waves.g.gain.setTargetAtTime(sea * (0.012 + swell * 0.05), t, 0.3); waves.f.frequency.setTargetAtTime(400 + swell * 900, t, 0.3);
      // creatures — how often each calls depends on zone, time of day and rain
      const dry = 1 - Math.min(1, rv * 1.4), night = 1 - day, dusk = x.dusk || 0, snow = w.snow || 0, warm = 1 - snow;
      const tw = w.town || 0; // (the Turkish town, W4: a town's sparrows, crows and the odd gull, its crickets hushed as the city's)
      const uc = w.uchisar || 0; // (Cappadocia, W5: the steppe's sparrows and crows by day, cicadas in the dry grass, crickets at night)
      const rates = {
        sparrow: day * dry * 0.22 * (0.3 + (w.city + tw) * 0.5 + w.sakura + w.country * 0.8 + w.coast * 0.2 + (w.mountain || 0) * 0.5 + uc * 0.3) * (1 - snow * 0.8),
        uguisu: day * dry * w.sakura * 0.06,
        crow: dry * (dusk * 0.14 + day * (w.city + tw + w.country + (w.mountain || 0) * 1.5 + snow * 2.5 + uc * 1.2) * 0.012),
        gull: day * (sea + 0.25 * tw) * dry * 0.16,
        frog: night * (w.country * 5 + w.sakura * 0.6 + w.coast * 0.3) * (1 + rv * 0.6) * warm,
        cricket: night * dry * (1.6 - (w.city + tw) * 1.1 + (w.mountain || 0) * 0.8) * warm,
        bike: day * dry * w.city * 0.014,
        bell: snow * 0.022 + (w.mountain || 0) * 0.006,
      };
      const voices = { sparrow, uguisu, crow, gull, frog, cricket, bike: bikeBell, bell: templeBell };
      for (const k in rates) {
        if (t < nextLife[k]) continue;
        if (rates[k] > 1e-4) voices[k](t + 0.05, 0.6 + Math.random() * 0.4);
        nextLife[k] = t + Math.max(0.12, every(rates[k] || 1e-6));
      }
      const chirp = 0.5 + 0.5 * Math.sin(t * 7.0) * Math.sin(t * 0.4);
      cicada.g.gain.setTargetAtTime((w.country + w.sakura * 0.3 + uc * 0.6) * day * 0.006 * chirp * (1 - (w.snow || 0)), t, 0.08);
    },
    toggle() { this.muted = !this.muted; master.gain.setTargetAtTime(this.muted ? 0 : 0.5, ac.currentTime, 0.3); },
  };
}
