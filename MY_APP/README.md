# Salah Tracker

A fresh Expo SDK 57 app. This first stage contains Home, Friends, and Profile tabs.

## Run

Requires Node.js 22.13 or newer and npm.

```sh
npm install
npm start
```

Open the QR code with an SDK 57-compatible Expo Go app. Press `a` for an Android
emulator. An iOS simulator requires macOS. Use `npm run web` for a browser preview.

## Current scope

- Home reserves a blank 4:3 artwork area at the top of the screen, including the
  area behind the visible status bar. No artwork is selected yet.
- The light panel overlaps the artwork by 12 layout points and has 24-point top
  corners. Its empty scroll area ends above the persistent tab bar.
- Friends and Profile are intentionally empty. The tab bar currently uses labels
  only while its visual design remains unspecified.

`HomeScreenLayout` accepts an optional `artworkSource` and panel children. A future
image uses `contain` to preserve the complete image. Keep artwork in 4:3 format
(1200 × 900 recommended). Put future Home cards inside this layout; leave the
artwork and panel wrapper outside its `ScrollView`.

## Validate

```sh
npm run lint
npm run typecheck
```

For a device check, confirm that the status bar overlays the blank artwork, the
rounded panel overlaps its bottom edge, and all three tabs remain available.
The panel is empty, so there is no content to scroll yet. When cards are added,
verify that overflowing content scrolls without moving the artwork or panel edge.
Also check a small phone, a larger phone, a tablet, and a device with a home
indicator. Browser previews cannot verify native status bars or system insets.
