# Migration checklist

## Foundation

- Install WordPress and Elementor.
- Install the PÉOPLE theme and widget plugin when implementation begins.
- Register Montserrat and Albert Sans locally.
- Add the global palette and responsive gutters from `design-system/tokens.json`.
- Build one global header and one global footer.

## Dynamic content

- Register `people_event` with date, month, year, status, image, type, venue and ticket URL.
- Register `people_arm` with index, accent color, title lines, image, tag, introduction and next arm.
- Use the same event query for Upcoming and Calendar.

## Widgets

- Build widgets in the order listed in `elementor/component-map.json`.
- Keep display typography, dots and motion inside the widget stylesheet.
- Expose content fields only; avoid controls that can break approved spacing and type relationships.

## QA

- Compare every page to `site-snapshot/`.
- Verify 1440px, 1024px, 768px and 390px widths.
- Verify no horizontal overflow.
- Verify reduced-motion behavior.
- Verify header and footer are identical on every page.
- Verify changing one event updates both homepage Upcoming and Calendar.
