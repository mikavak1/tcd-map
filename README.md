# TCD Campus Map Website

**Trinity College Dublin — Interactive Campus Map & Building Catalogue**

---

## Project Overview

This website consists of two main pages:

| File | Description |
|---|---|
| `index.html` | Interactive Map (homepage) |
| `catalogue.html` | A–Z Building Catalogue |

Both pages share a common data file (`data/buildings.js`) so adding or editing a building only needs to happen in one place.

---

## File Structure

```
tcd-campus-map/
│
├── index.html              ← Interactive map page
├── catalogue.html          ← A-Z catalogue page
│
├── css/
│   ├── base.css            ← Shared styles, variables, header, footer
│   ├── map.css             ← Map page specific styles
│   └── catalogue.css       ← Catalogue page specific styles
│
├── js/
│   ├── shared.js           ← Shared utilities (saved state, icons, helpers)
│   ├── map.js              ← Interactive map logic (Leaflet)
│   └── catalogue.js        ← Catalogue page logic
│
├── data/
│   └── buildings.js        ← All building data (EDIT THIS to add/update buildings)
│
└── images/
    └── placeholders/
        └── placeholder.svg ← Placeholder shown until real images are added
```

---

## How to Add or Edit a Building

Open `data/buildings.js`. Each building looks like this:

```js
{
  id: "old-library",            // Unique slug (no spaces, lowercase, hyphens)
  name: "Old Library",          // Display name shown everywhere
  shortDesc: "Early 18th-century library...", // Short description for map popup
  hours: "09:30–17:00 | Mon–Sun",             // Opening hours (or leave as "")
  categories: ["heritage", "accessibility"],   // One or more category keys (see list below)
  coords: [53.3438, -6.2576],   // [latitude, longitude] — adjust via https://www.latlong.net/
  image: "images/old-library.jpg",            // Path to building image
  pageUrl: "buildings/old-library.html",      // Link to building subpage
},
```

### Category Keys

| Key | Label | Colour |
|---|---|---|
| `academic` | Academic | Blue |
| `student-services` | Student Services | Violet |
| `administrative` | Administrative | Teal |
| `heritage` | Heritage and Cultural | Deep Purple |
| `facilities` | Facilities | Amber |
| `accessibility` | Accessibility | Red |

A building can belong to **multiple** categories. The first category listed is its "primary" one (used for the map pin colour and icon).

---

## Replacing Placeholder Images

1. Save your building image anywhere inside the `images/` folder (e.g. `images/old-library.jpg`).
2. Open `data/buildings.js` and update the `image` field for that building.
3. Images are displayed with `object-fit: cover`, so they will never be distorted or skewed, regardless of the original dimensions. Recommended size: at least **480 × 320 px**.

---

## Adjusting Map Coordinates

1. Go to [https://www.latlong.net/](https://www.latlong.net/)
2. Find the building on the map.
3. Copy the latitude and longitude.
4. Update the `coords: [lat, lng]` field in `data/buildings.js`.

---

## Adding Subpage Links

When building subpages are ready, update the `pageUrl` field for each building in `data/buildings.js`. Currently all values are placeholder anchors like `"#placeholder-old-library"`.

---

## Colours and Fonts

Colours and typography are defined in `css/base.css` under the `:root` block:

```css
--oxford-blue:     #042851;
--parchment-white: #F5F0E8;
--font-display:    'Crimson Pro', Georgia, serif;
--font-body:       'DM Sans', system-ui, sans-serif;
```

---

## Saved Buildings

Users can bookmark buildings. Saves are stored in the browser's `localStorage` under the key `tcd_saved_buildings`, so they persist between sessions on the same device.

---

## Publishing to GitHub Pages

1. Create a repository on GitHub.
2. Push all files to the `main` (or `master`) branch.
3. Go to **Settings → Pages** → Source: `Deploy from a branch` → Select `main` → `/root`.
4. The site will be published at `https://<your-username>.github.io/<repo-name>/`.

---

## Accessibility

- All interactive elements have `aria-label` attributes.
- A skip link is provided on both pages.
- Category icons use `aria-hidden="true"` with descriptive text elsewhere.
- Focus styles are visible and meet WCAG contrast requirements.
- The map includes an `aria-describedby` description for screen readers.

---

## HTML & CSS Validation

- HTML: validate at [https://validator.w3.org/](https://validator.w3.org/)
- CSS: validate at [https://jigsaw.w3.org/css-validator/](https://jigsaw.w3.org/css-validator/)

Both files are written to pass validation. If you add new styles or markup, keep this in mind.

---

## External Dependencies (CDN)

| Library | Used in | Version |
|---|---|---|
| [Leaflet.js](https://leafletjs.com) | Map page | 1.9.4 |
| [Google Fonts](https://fonts.google.com) | Both pages | (Crimson Pro + DM Sans) |
| OpenStreetMap tiles | Map page | — |

All other functionality is plain JavaScript — no frameworks required.
