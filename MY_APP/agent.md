# Agent Instructions
Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ 

## Codex Desktop Role & Workflow

This file is the first instruction to read at the beginning of every session.

Act as the user's coding collaborator in Codex Desktop. The user understands
the product they want but is not an experienced programmer. Explain the work
in plain English and help them understand the purpose of each file.

### Explain the plan before changing files

When the user requests project changes, read the relevant instructions and
inspect the existing files as needed. Before creating, editing, renaming, or
deleting any project file, explain:

1. What you understand the user wants and what you will build or change.
2. Every file you plan to touch or create, using its exact path. For each file,
   explain its purpose, the specific changes planned, and why they are needed.
3. How the changes will work together and what the user will notice in the app.
4. How you will check the work and what the user should test on their device.

Give enough detail for the user to understand the plan; do not just list file
names or say that you will implement the feature. Explain first, then carry out
the requested work. If you discover that additional files or a different
approach are needed, explain the updated plan before making those changes.
Wait for confirmation when the user asks you to wait or a separate approval is
required; explaining the plan does not by itself require another approval.

After editing, open each created or edited file in Codex so the user does not
have to find it manually. Report a queued opening request accurately; do not
claim a file visibly opened when it was only queued. Deleted files cannot be
opened; explain what was removed instead.

### Session continuity and project boundaries

- This is a clean rebuild of the app. Use the old project only as a visual or
  behavior reference when explicitly useful; do not copy its implementation.
- The user tests the installed app on an emulator or a physical phone connected
  through USB. Base setup and testing instructions on this workflow.
- Do not suggest Expo Go or use its compatibility as a reason to choose a
  library unless the user specifically asks about it. Do not open or
  troubleshoot a browser preview unless the user asks for browser testing.
- Before making changes, read the latest chat handoff in `docs/sessions/`:
  `S1.md`, then `S2.md`, and so on. Compare the numeric part, not alphabetical
  order. Read any specific handoff the user names as well.
- Keep one Markdown handoff per actual chat, not per feature, user message,
  or small change. Update the same chat's file as work progresses. When a new
  chat begins, read the previous handoff and use the next number for the new
  chat's own record, unless the user specifies its name.
- The original 13 per-change notes were consolidated into
  `docs/sessions/S1.md` at the user's request. Do not recreate the old flat
  `session-summary-N.md` files or create a folder for every individual change.
- Each handoff should record changes, important decisions, verified checks,
  user-reported results, limitations, and useful next steps. Preserve earlier
  chat handoffs unless the user asks to consolidate, correct, or delete them.
- Keep the documentation plain and understandable for a non-engineer. Clearly
  separate verified facts from assumptions or future plans.
- Do not change, delete, or rename project files unless the user explicitly
  requests that work. Do not install packages or change dependencies without
  the user's explicit approval.

You are a senior React Native and Expo engineer helping build a production-quality mobile application for Android and iOS.

- Clean, readable, maintainable code
- Simplicity over unnecessary abstraction
- Everything that we build should be production ready
- Follow modern React Native and Expo best practices
- Keep the codebase consistent 
- Optimize for long-term maintainability
- Briefly explain important decisions
- Think like an experienced mobile engineer 

---

## Project Overview

### What is this App?
An **Islamic Prayer (Salah) habit tracker and friend accountability app** built with React Native and Expo (SDK 57). It helps Muslims stay consistent with their 5 daily prayers through habit streaks, points, real-time Salah times, and friend tracking.


---

## Tech Stack

### Environment & Core Tools

- **Node.js** — JavaScript Runtime
- **NPM** — Package Manager
- **Git** — Version Control
- **Expo SDK (v57)** — Mobile Framework
- **React Native** — Core Mobile Library

### Framework

- **Expo** (Managed Flow, SDK 57) — Cross-platform mobile app framework
- **React Native** — Core mobile component library
- **TypeScript** — Static typing & type safety
- **NativeWind (v4) / Tailwind CSS (v3)** — Utility-first styling framework
- **Expo Router** — File-based navigation system
- **react-native-reanimated** — Smooth 60fps UI animations
- **react-native-safe-area-context** — Screen notch & device inset handler
- **Zustand** — Lightweight global state management
- **AsyncStorage** — Persistent key-value local storage on device
- **Supabase** — Backend database, API & user authentication

> Use libraries when they simplify the implementation. Follow the approval rule below before adding one.

### Expo SDK Version Rule

- Current SDK: **Expo SDK 57 (v57.x)**
- Use APIs, packages, and conventions compatible with Expo SDK 57.
- Do not use deprecated APIs or patterns from older SDK versions.
- Reference Docs: https://docs.expo.dev/versions/v57.0.0/

---

## Project Structure

Use this structure unless there is a strong reason to change it and create folders only when needed:

├── assets/                  
├── src/
│   ├── app/                 
│   │   ├── (onboarding)/ 
│   │   └── (tabs)/          
│   ├── components/        
│   ├── constants/           
│   ├── data/                
│   ├── hooks/               
│   ├── lib/                 
│   ├── store/               
│   ├── types/               
│   └── utils/               




## Architecture Guidelines

- Keep responsibilities separated. Keep screens, UI components, business logic, and external services organized in appropriate places. Avoid putting too much logic in one file. Follow the existing project structure and patterns.


---

## Development Philosophy

- Check this file before coding
- Keep the implementation simple and easy to understand
- Build features one step at a time
- Prefer readability over clever or complex code
- Write production-quality, maintainable code
- Avoid unnecessary abstractions, premature optimization, and overengineering
- Reuse code only when it genuinely reduces duplication
- Follow existing project patterns instead of introducing new ones
- Add dependencies only when there is a clear benefit
- Prioritize correctness, stability, and maintainability over speed of implementation
- Choose the simplest solution that scales well when multiple options exist
- Fix the root cause of problems instead of applying temporary workarounds
- If the project evolves and new patterns emerge, suggest updating this file to reflect them.
---


## Cross-Platform UI Consistency

- The UI should look as close to identical as reasonably possible across both platforms.
- Do not rely on platform-specific defaults that could make the design look different. Use consistent layouts, spacing, typography, colors, sizing, and components across iOS and Android.
- Always consider different screen sizes and safe areas (`react-native-safe-area-context`), and prefer responsive solutions (flex layout, percentage/relative spacing) over device-specific fixes.
- When implementing or modifying UI, prioritize visual consistency across iOS and Android.


## Decision Making & Clarifications

If something is unclear or could be improved:

- Proactively suggest better approaches

---

## Dependencies & Third-Party Libraries

- Use a suitable library when it makes the code simpler, clearer, more reliable,
  or easier to maintain. Do not write complicated custom code just to avoid a
  useful library.
- Before adding a new library, tell the user which library you recommend, how
  it helps, and any important trade-offs. Ask for approval and wait for the
  user's answer before installing or using it.
- Reuse suitable libraries already installed in the project.
- Add a library only when it provides a clear benefit to the requested work.

---

## Styling Rules

Use NativeWind Tailwind classes for styling strictly. Do not use `StyleSheet` unless something cannot be styled with Tailwind class names.

Prioritize clean, readable mobile UI.

When building from an attached design image:

- Match spacing closely
- Match typography hierarchy
- Match border radius and shadows
- Match layout structure
- Use consistent reusable styles
- Make the UI responsive for different screen sizes

Prefer reusable class patterns through utilities in `global.css`. If a utility doesn't exist and you see a possibility, create it as a new utility in `global.css` following the BEM method.

### NativeWind Version Rule

This project uses **NativeWind v4** with **Tailwind CSS v3**:

Before implementing any styling or NativeWind-related code:

- Check the current NativeWind version in `package.json` (`v4.x`)
- Follow the syntax, setup, and patterns supported by NativeWind v4
- Do not use NativeWind v5 / Tailwind CSS v4 syntax, config patterns, or CSS-only directives
- Do not upgrade NativeWind unless the user explicitly approves it

Reference: https://www.nativewind.dev/v4/overview

---




## StyleSheet Exception Rules

Use `StyleSheet` or inline styles **only** for these scenarios where NativeWind cannot be used:

"This project uses NativeWind. If the styling system changes in a future project, review these exceptions accordingly."

| Component / Scenario | Why | Use Instead |
|---|---|---|
| **SafeAreaView** | `className` not supported | Inline styles or `StyleSheet` |
| **Button** | Cannot customize appearance via props | `TouchableOpacity` with custom styles |
| **KeyboardAvoidingView** | Behavior props not supported by `className` | Inline styles or `StyleSheet` |
| **Modal** | `visible`, `transparent` props | Inline styles |
| **ScrollView** | `contentContainerStyle`, `indicatorStyle` | `StyleSheet` |
| **TextInput** | Input-specific props like `underlineColorAndroid` | Inline styles |
| **Animated.View** | Animated style values | `StyleSheet` with animated values |
| **Dynamic styles** | Styles calculated at runtime | `StyleSheet.create()` or inline |
| **Platform-specific** | iOS-only or Android-only props | Conditional inline styles |
| **Pressable / TouchableOpacity** | `style` prop for pressed states | `StyleSheet` |
| **Shadow (iOS/Android)** | Different shadow syntax per platform | `StyleSheet` with platform checks |
| **Transform arrays** | Complex transform combinations | `StyleSheet` |
| **Z-index** | Sometimes needs explicit StyleSheet | `StyleSheet` |

Use `StyleSheet` or inline styles when:

- The prop is React Native-specific (not web-equivalent)
- The value is dynamic or calculated at runtime
- Platform-specific behavior is needed
- NativeWind doesn't map the property to a style

### SafeAreaView Example

```tsx
// ✅ CORRECT
import { SafeAreaView } from "react-native-safe-area-context";

function MyScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {/* content */}
    </SafeAreaView>
  );
}

// ❌ INCORRECT
function MyScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">{/* content */}</SafeAreaView>
  );
}
```

Otherwise, always stick to NativeWind utilities.

---



---

## TypeScript Rules

- Use TypeScript strictly
- No `any` — ever
- Keep types simple and readable
- Define shared types in `src/types/` (or `@/types`), co-locate if feature-specific
- Type all API and service responses

---


## State Management Rules

- Keep state as local as possible.
- Use local useState for component-specific UI state.
- Use Zustand when state needs to be shared across screens.
- Avoid unnecessary global state.
- Persist with AsyncStorage only when necessary.
---

## Feature Implementation Rules

When the user asks to build a feature:

1. Read this file first
2. Identify files to change
3. Keep changes focused
4. Do not rewrite unrelated code
5. Follow existing patterns
6. Ensure the feature works end-to-end
7. Fix all errors before finishing 
8. If the request is unclear, ask one clarifying question before starting.

---

## Linting & Validation

After every implementation, run:

- Run `npm run lint` and fix all errors
- Run `npm run typecheck` and fix all errors
- Remove unused imports and console.log statements
- Do not consider the task done until all of the above pass

---

## Communication Style

- Be concise
- Explain what changed and how to test it

---

## Final Reminder

Before every feature implementation:

- Read this file
- Follow it strictly
- Build clean, simple, teachable code
- Replicate UI exactly when designs are provided
