# The player's car (step 35e)

The painted kei crossover of `ref/city.png`, as a painted 3D model.

- **Paintings:** three flat elevations of the car generated with Grok Imagine (the user's own account): the side (the q1 prototype's
  `refs/car/grok_side_v1.png`, painted after `ref/city.png`'s car), the rear (anchored on a crop of the car in `ref/city.png`) and the front
  (anchored on the side elevation). No photograph was used to make them, and none was traced.
- **Model:** the visual hull of those three silhouettes, with the paintings projected back onto it; wheels, tyres, mirrors, wipers, the
  lamps' lenses and the tailpipe modelled. Made by `~/cdtest/s35e/scripts/clean.py`, `carhull.py` and `pack.py` (config `cfg_car.json`,
  lossless masters in `~/cdtest/s35e/out/`).
- **Liveries:** the city's mint (`mint`), the coast's lighter mint (`coast`), the cherry avenue's light blue (`blue`) and the country's mint
  with a white band (`band`) are the same paintings recoloured, matched to the four reference paintings.
- The real Suzuki Hustler photos gathered for the brief (Wikimedia Commons, CC0: `2024_Suzuki_Hustler_Hybrid_X.jpg`,
  `2024_Suzuki_Hustler_Hybrid_X_rear.jpg`, `Suzuki_HUSTLER_G_MR31S_front.JPG`) were looked at for proportions only, and the real car's
  published size (3.40 × 1.48 × 1.68 m) checked the model's scale (3.38 × 1.68 × 1.60 m: as wide as the paintings draw it).
