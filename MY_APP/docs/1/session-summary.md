# Session 1 — New App Foundation

Date: 2026-10-16

## What was built

This session created the first clean implementation in `MY_APP`. No code was
copied from the old project.

- Expo SDK 57 project setup with TypeScript.
- Expo Router navigation with three bottom tabs: Home, Friends, and Profile.
- Friends and Profile screens exist but are intentionally empty placeholders.
- Home screen has a fixed 4:3 artwork area at the top.
- The artwork area does not add top safe-area padding, so it can sit behind the
  visible status bar.
- A light panel has rounded top corners and slightly overlaps the artwork.
- Only the panel contents scroll vertically; the artwork stays fixed.
- The bottom tab bar is outside the Home scroll area and remains visible.
- The artwork accepts an optional image source for a future design asset. No
  artwork or internal Home content was invented in this session.

## Important files

- `src/app/_layout.tsx` — app-level layout and visible status bar.
- `src/app/(tabs)/_layout.tsx` — bottom tab navigation.
- `src/app/(tabs)/index.tsx` — Home route.
- `src/app/(tabs)/friends.tsx` — empty Friends route.
- `src/app/(tabs)/profile.tsx` — empty Profile route.
- `src/components/HomeScreenLayout.tsx` — fixed artwork, overlapping panel,
  and independent scrolling behavior.
- `package.json` — scripts and approved Expo/React Native dependencies.

## Verified

- `npm run lint` passed.
- `npm run typecheck` passed.
- Expo dependency compatibility check passed.
- Expo configuration check passed.
- Android, iOS, and web production exports compiled successfully.

## Not verified in this environment

- The app was not visually verified in a browser. That is intentionally not a
  required workflow for this project; the user will test with Expo Go or an
  emulator.
- No final artwork, Home cards, Friends functionality, or Profile content has
  been specified or implemented yet.

## Next session starting point

Read `agent.md` and this file before coding. Keep the current navigation and
layout behavior stable unless the user gives a new requirement. The next
feature should be implemented only after its visual and behavior requirements
are provided.
