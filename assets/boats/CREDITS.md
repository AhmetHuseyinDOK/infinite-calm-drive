# The boats and the city ferry (step 35h)

The coast's Japanese fishing boat; Istanbul's wooden kayık and small motor boat; the Şehir Hatları city ferry's bow, stern, decks and masts.

- **Models:** designed in code (`~/cdtest/s35h/scripts/`: `fb.py`, `kayik.py`, `motor.py`: parametric hulls with their gunwale, bulwark and
  deck, cabins, masts and fittings; `ferry.py`, `ferry2.py`: the ferry's solid round its existing side painting, as voxels, marching
  cubes, smoothed and decimated per projection). Packed by `bake.py`, `pack.py`, `packweb.py` into `boats1jp.*` and `boats1tr.*`.
- **Paintings:** generated with Grok Imagine (the user's own account), each an `image_edit` of a flat layout drawn from the model at its
  exact proportions (side, top, bow and stern), with a style anchor:
  - the fishing boat: crops of `ref/coast.png`; its bow and stern on its own side painting; its white livery recoloured from the salmon one;
  - the kayık and the motor boat: crops of `ref/world/istanbul_bosphorus.png`; their bows and sterns on their own side paintings; their
    other liveries recoloured;
  - the ferry's bow and stern: on the ferry's existing side painting (the world atlas's `trFerry`, step W2), which stays its side texture.
  The Turkish flag on the motor boat and the Japanese flag on the fishing boat were drawn on the layouts.
  No photograph was used to make them, and none was traced. Wikimedia Commons photos were looked at for shapes and proportions only
  (`~/cdtest/s35h/refs/*/credits.txt`, `~/cdtest/q1/refs/boats/photos/credits.txt`): fishing boats at Himeji, Kisarazu and Shiraoi; an
  Istanbul fishing-tour boat; a Sarıyer rowing boat; Şehir Hatları ferries at Kadıköy, Beşiktaş and Eminönü.
- **The Karaköy quay's moorings:** placed along the shore of the zone's water raster (OpenStreetMap, © OpenStreetMap contributors, ODbL),
  `~/cdtest/s35h/tools/moor.mjs`.
- Lossless masters: `~/cdtest/s35h/pack/` (`*_albedo.png`, `*_glow_full.png`) and the paintings in `~/cdtest/s35h/gen/`.
