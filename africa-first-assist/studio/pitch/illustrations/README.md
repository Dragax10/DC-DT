# Pitch illustrations · "Signal Convergence"

Generative illustrations for the English pitch deck (cover, moment, promise, ask), made with the algorithmic-art skill (p5.js, seeded).

- `philosophy.md`: the art concept.
- `art.js`: the algorithm and the four slide presets (seed, colours, text-safe masks).
- `render.js`: renders the presets to 1920×1080 @2x JPEGs. Needs `p5.min.js` (npm `p5@1.7.0`, `lib/p5.min.js`) next to it and Playwright: `node render.js cover moment promise ask`.

Same seed, same image. Change a preset's `seed` for a new variation.
