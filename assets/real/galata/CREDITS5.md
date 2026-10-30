# The Galata zone's painted plates (step 35P)

- `plates1/`: the plates (`plates1.json`, the index: each stop's two cameras in the zone's frame and its files with their byte sizes;
  `L_<stop>_{hi,lo}.webp`, the landscape set; `P_<stop>_{hi,lo}.webp`, the portrait set; `…n_{hi,lo}.webp`, their night versions).
  - Each is a painting made with **FLUX.2 [klein] 4B** (Black Forest Labs, released under the **Apache License 2.0**:
    https://huggingface.co/black-forest-labs/FLUX.2-klein-4B), used as an instruction editor on the game's own render of the zone's
    model (its OpenStreetMap blocks, the old city's buildings, the bridge), with its text encoder Qwen3-4B (**Apache-2.0**) and the
    FLUX.2 VAE from the same Apache-2.0 klein-4B repository. The prompts name no person, studio or work.
  - The night versions are the same model's edits of the day paintings.
  - Post-processing (colour lock on lead and grey stone, the sky cut, WebP) by the project's own scripts (`~/cdtest/s35p/scripts`).
- The model they are projected onto is built from **map data © OpenStreetMap contributors**, available under the Open Database
  License (ODbL), https://www.openstreetmap.org/copyright (the zone's blocks: `src/real_galata.js`; the old city: `mass1.*`,
  `CREDITS4.md`), its ground from AWS Terrain Tiles (SRTM, courtesy of the U.S. Geological Survey).
- Street View was used only to compare the game with the real place, never as an input.
