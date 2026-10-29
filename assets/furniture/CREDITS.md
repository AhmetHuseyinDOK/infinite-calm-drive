# The street furniture (step 35g)

The vending machines, the bicycles, the Turkish town's simit cart, tea tables and chairs, and the country bus stop, as painted models.

- **Paintings:** generated with Grok Imagine (the user's own account), each an `image_edit` on a source of our own:
  - the vending machine's front: a flat layout drawn at the model's proportions (1.00 × 1.83 m), repainted in the style of the q1
    prototype's `refs/furniture/grok_vending_v1.png`; its blue and white liveries repainted from the red one;
  - the mamachari's side elevation: on a crop of `ref/city.png` for the style; its red and mint frames repainted from the silver one;
  - the simit cart's long side and end: layouts of the cart's body, glass case and canopy, in the style of `ref/world/turkish_town.png`.
  No photograph was used to make them, and none was traced. The Wikimedia Commons photos gathered for the brief (a vending machine
  being restocked, a utility bicycle's stand, two simit carts: `~/cdtest/q1/refs/furniture/photos/credits.txt`) were looked at for
  proportions only.
- **Drawn in code** (`~/cdtest/s35g/scripts/procedural.py`): the wood of the tea tables and chairs, the tea glass and sugar bowl, the
  cart's spoked wheel, the bus stop's round sign (バス停 / 田中前), its back and timetable, the shelter's wall, roof, fascia and bench.
  The bus company (みどり交通) and the stop's name are made up. Lettering in Noto Sans CJK (SIL Open Font License).
- **Models:** built in code at load (`src/furniture.js`). Keyed off their magenta (`key.py`), packed into one atlas (`pack.py`); lossless
  masters in `~/cdtest/s35g/masters/`.
