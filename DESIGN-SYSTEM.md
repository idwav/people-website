# PÉOPLE — Page Design Rules

This file is the visual source of truth for every new page. The homepage is the reference implementation.

## 1. Core principles

- Build one continuous editorial composition. Avoid a stack of isolated “website sections”.
- Every element needs a compositional reason: alignment, counterweight, image relationship or hierarchy.
- Use scale, position, whitespace and brand dots before borders, pills or decorative containers.
- Avoid strokes around tags, cards and lists. Rules are allowed only when they carry structure, as in the main navigation or data rows on the homepage.
- Text always sits above moving dots and media.
- Do not overlap letters or lines unless the overlap is deliberate and readable.

## 2. Page grid and margins

- Desktop page gutter: `clamp(20px, 2.1vw, 40px)`.
- Mobile page gutter: `20px`.
- Main desktop grids use 2 or 3 columns with `clamp(24px, 4vw, 72px)` gaps.
- Content aligns to the same left and right gutters across the full page.
- Do not let images, headings or cards touch the viewport edge unless the homepage reference does so intentionally.
- Preferred media ratios: `4 / 5` for portraits, `4 / 3` for editorial images, `16 / 7` for wide transitions.

## 3. Typography

- Headlines: Montserrat, weight `500–800` depending on hierarchy.
- Secondary/body text: Albert Sans, weight `400–600`.
- Major page headline: `clamp(3.8rem, 8.5vw, 9rem)`.
- Section headline: `clamp(2.8rem, 6vw, 6.5rem)`.
- Item headline: `clamp(1.65rem, 3vw, 3.4rem)`.
- Body copy: `clamp(12px, .95vw, 16px)`, line-height `1.45–1.6`.
- Metadata: `9–11px`, uppercase, letter-spacing `.02em–.08em`.
- Headline tracking: `-.04em–-.075em`; never tighten until letters collide.
- Headline line-height: `.82–.95`; use `.9` when a title has more than one line.
- Small text uses normal or slightly positive tracking. Never apply display-title tracking to body copy.

## 4. Spacing rhythm

- Section vertical padding: `clamp(5rem, 9vw, 10rem)`.
- Major internal gap: `clamp(4rem, 8vw, 9rem)`.
- Text-to-text gap: `1–2rem`.
- Adjacent ideas should appear in the same viewport when possible; avoid large empty transitional bands.
- Staggered layouts may shift blocks vertically by `4–10vw`, while retaining clear alignment anchors.

## 5. Colour

- Blue `#004fff`
- Yellow `#ffff00`
- Cyan `#00c7fc`
- Red `#d12028`
- Green `#00c112`
- Pink `#e83a95`
- Orange `#f05223`
- Black `#000000`
- White `#ffffff`
- On the Creator’s Academy page, blue is the continuous canvas and primary text is white.
- Use other brand colours as small dots or focused accents, not arbitrary text colours.

## 6. Images

- Every long-form page needs a visual beat at least every 1–1.5 viewport heights.
- Mix one wide image, paired editorial images and portrait crops.
- Images should participate in the grid, not appear as generic cards.
- Use `object-fit: cover`; choose crop positions per image.
- Avoid borders and rounded corners.

## 7. Lists and programs

- Prefer clean text clusters, staggered columns or numbered compositions.
- Use small solid brand dots for anchors and progression.
- Do not use pills, outlined chips or boxed feature cards.
- Keep enough space between list items to preserve hierarchy.

## 8. Motion

- Entry motion: word or block glides upward with `cubic-bezier(.16,1,.3,1)`.
- Content should be fully visible by the time its section reaches the middle of the viewport.
- Motion must not change the final layout dimensions.
- Respect `prefers-reduced-motion`.

## 9. Responsive behavior

- Desktop compositions collapse to one column below `820px`.
- Preserve the hierarchy on mobile; reduce size rather than allowing clipping.
- Remove stagger offsets that create empty space on mobile.
- Verify no horizontal overflow at every breakpoint.

## 10. Final site navigation

- Primary header: `Home · Academy · Join · Our Space · Calendar · People Studio · What’s Your Color`.
- Academy owns five child destinations: `The Cycle`, `Re-Birth Journey`, `Personal Identity Full Class`, `What Is Your Colour`, and `Dinner Show`.
- Preserve the circular close control on the eight-arm opening experiences; it returns to the homepage arms section.
