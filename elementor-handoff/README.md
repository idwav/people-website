# PÉOPLE — Elementor Handoff

This directory is the migration source of truth for the final WordPress + Elementor build.

## Delivery strategy

- Elementor controls text, images, links, dates and item order.
- The PÉOPLE implementation controls typography, spacing, motion and responsive behavior.
- Header and footer are global templates and must never be recreated per page.
- Upcoming and Calendar use one shared `Event` content type.
- The Eight Arms use one shared `Arm` content type and one page template.
- Motion must not change final layout dimensions.

## Package contents

- `site-snapshot/` — complete working static website at the current approved milestone.
- `design-system/` — tokens and visual rules extracted from the approved homepage.
- `content/` — structured data ready for WordPress custom fields.
- `elementor/` — widget and template specifications for implementation.
- `migration-checklist.md` — build and QA order.

## Recommended WordPress architecture

1. A minimal `people-theme` for global assets, fonts, header, footer and page chrome.
2. A `people-elementor` plugin containing the custom Elementor widgets.
3. Custom post types: `people_event` and `people_arm`.
4. Elementor global colors and typography generated from `tokens.json`.
5. One source of truth for every event, used by the homepage Upcoming widget and Calendar page.

The static snapshot is the visual reference. Elementor output should be compared against it at desktop, tablet and mobile widths.
