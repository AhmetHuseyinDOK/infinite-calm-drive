# The Galata Bridge's T1 tram (step 35d)

The painted livery of the T1's Bombardier Flexity Swift A32, laid on the game's own lofted body (`src/tram.js`).

- **Paintings:** three flat elevations generated with Grok Imagine (the user's own account), each an `image_edit` of a layout drawn at the
  game's loft's exact proportions (`~/cdtest/s35d/scripts/layout.py`: the cab section's side, the middle section's side, the cab's face),
  with a crop of the Galata concept painting (`ref/world/istanbul_galata.png`) as the style anchor; and two night repaints of the sides
  (Grok `image_edit` of the day paintings, anchored on a crop of `ref/tod/city_night.png`), whose lit windows give the saloon's glow. The
  destination displays' lettering (KABATAŞ, BAĞCILAR) and the fleet numbers were drawn by the pipeline, not by Grok. No photograph was
  traced or used as a source image.
- **Cut and packed** by `~/cdtest/s35d/scripts/cut.py` and `pack.py`: the sides resampled into the loft's side cells (rows by the
  cross-section's arc length), the faces into three face cells, the roof fairings', the under-skirt's and the bellows' cells; what glows
  at night drawn from the paintings' own windows and lamps. Lossless masters in `~/cdtest/s35d/masters/`.
- The livery and layout follow Commons photographs of Flexity Swift trams on the T1, looked at for reference only (Zach1055, Calistemon,
  Cagataydonmez10; CC BY-SA 4.0; listed in `~/cdtest/q1/refs/tram/photos/credits.txt`).
