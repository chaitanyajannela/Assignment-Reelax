# Figma Assignment — Review Your Details

Pixel-perfect React implementation of the [Figma Assignment design](https://www.figma.com/design/9d9gdInqx8rh5dpSN9NRro/Assignment?node-id=0-3).

## Stack

- React 18 + Vite
- Tailwind CSS
- Inter (Google Fonts)

## Getting started

```bash
cd figma-assignment
npm install
npm run dev
```

## Responsive breakpoints

| Range | Tailwind | Layout behavior |
|-------|----------|-----------------|
| **Mobile** 320–479px | base | Stacked nav: search on top, icon-only actions, expandable menu |
| **Mobile+** 480–767px | `sm:` | Single-row nav with full button labels |
| **Tablet** 768–1023px | `md:` | Figma logo tab + search + actions in 71px bar |
| **Desktop** 1024px+ | `lg:` | Two-column main grid (billing + sidebar), 480px search width |

### Testing in DevTools

1. Open the app and press `F12` → toggle device toolbar.
2. Test widths: **320**, **375**, **480**, **768**, **1024**, **1280**.
3. Tab through interactive elements and verify **focus rings** (buttons, inputs, links, coupon radios).
4. Hover and click buttons, nav menu, coupon options, and form fields.

## Interactive states

- **Buttons:** hover brightness, active scale + brightness, `focus-visible` ring
- **Search / form inputs:** hover border, focus ring + border
- **Links:** hover/active color transitions
- **Coupons:** hover border, focus-within ring, selected border state

## Build

```bash
npm run build
npm run preview
```
