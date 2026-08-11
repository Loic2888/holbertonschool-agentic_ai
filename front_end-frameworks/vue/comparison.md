# React vs Vue.js — Comparative Analysis

This document compares the React and Vue 3 implementations of the same Agentic AI landing page, built during this curriculum. Both projects share an identical folder structure (`components/{layout,sections,ui,cards}`, `data/`, `services/`) and the same UI (Header, Hero, About, Features, Insights, Contact, Footer), which makes a component-by-component comparison possible.

---

## Components

**React** — a component is a JavaScript function that returns JSX. There is no dedicated file extension; logic and markup live in the same `return (...)` block.

```jsx
// react/src/components/layout/Header.jsx
const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 ...">
      ...
    </header>
  );
};
export default Header;
```

**Vue** — a component is a `.vue` Single File Component (SFC) split into three explicit blocks: `<script setup>` (logic), `<template>` (markup) and, optionally, `<style>`.

```vue
<!-- vue/src/components/layout/Header.vue -->
<script setup>
import Logo from '../ui/brandLogo.vue';
</script>
<template>
  <header class="fixed top-0 w-full z-50 ...">
    ...
  </header>
</template>
```

**Similarities**: both are function-based, composable, import/export like any JS module, and both projects organize them identically (`ui/` for atoms like `Button`/`Badge`, `sections/` for page blocks, `layout/` for `Header`/`Footer`, `cards/` for repeated items).

**Differences**: React mixes logic and markup in one JS function (markup is just a return value), while Vue physically separates them into blocks in the same file. React needs `export default` explicitly; Vue's `<script setup>` auto-exposes everything declared at the top level to the template — no `export`, no `return` statement needed.

---

## Templates

**JSX** (React) is JavaScript with embedded XML-like syntax. It compiles to `React.createElement()` calls, so it inherits full JS expressiveness (any JS expression works inside `{}`) but also JS quirks: `className` instead of `class`, `htmlFor` instead of `for`, camelCase attributes (`onSubmit`, `autoComplete`).

**Vue templates** are closer to real HTML, with a constrained directive-based syntax (`v-if`, `v-for`, `v-model`, `:attr`, `@event`). They aren't arbitrary JS — you can put expressions in `{{ }}` or bound attributes, but not arbitrary statements.

Concretely, in our `Button` component:
```jsx
// React
className={`${baseStyle} ${variant === 'primary' ? primaryStyle : secondaryStyle}`}
{showIcon && <ArrowRight className="w-5 h-5" />}
```
```vue
<!-- Vue -->
:class="[baseStyle, variant === 'primary' ? primaryStyle : secondaryStyle]"
<ArrowRight v-if="showIcon" class="w-5 h-5" />
```

**Advantages/disadvantages**: JSX is more powerful (it's just JS — you can build markup with loops, ternaries, IIFEs, helper functions) but also more verbose for simple cases (string interpolation for classes, `&&` guards that can silently render `0`). Vue's templates are more readable for designers/non-JS-heavy contributors and read closer to plain HTML, but anything outside the supported directive set (complex branching, computed markup) has to be pushed back into `<script setup>` as a computed value.

---

## Props

**React** has no built-in prop typing; this project uses the external `prop-types` package for runtime validation:
```jsx
// react/src/components/ui/Button.jsx
const Button = ({ text, href, variant = 'primary', showIcon = false }) => { ... };
Button.propTypes = {
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
};
```

**Vue** has prop declaration and validation built into the framework via `defineProps`:
```vue
<!-- vue/src/components/ui/Button.vue -->
defineProps({
  text: { type: String, required: true },
  variant: {
    type: String,
    default: 'primary',
    validator(value) { return ['primary', 'secondary'].includes(value); }
  }
});
```

**Similarities**: both are one-way (parent → child), both support required fields, default values and custom validation (`PropTypes.oneOf` ≈ Vue's `validator`).

**Differences**: React's typing is opt-in and needs an extra dependency (or TypeScript) — it's purely a dev-time warning in the console, stripped in production. Vue's `defineProps` is a compiler macro, native to the SFC, no import needed, and props are destructured/used directly in the template without an explicit `props.` prefix inside `<template>` (though `props.x` is required inside `<script setup>` itself, as seen in `InsightCard.vue`'s `computed(() => props.index === 0)`).

---

## State management

**React** (`Contact.jsx`) uses `useState`, and any nested update requires manually spreading the previous object:
```jsx
const [formData, setFormData] = useState({ fullName: '', email: '', message: '' });
const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};
```

**Vue** (`Contact.vue`) uses `reactive` for the object and `ref` for primitives; nested properties are mutated directly, no spreading, no setter function:
```js
const formData = reactive({ fullName: '', email: '', message: '' });
const isSending = ref(false);
// mutation is direct:
formData.fullName = '';
isSending.value = true; // ref needs .value outside the template
```

**Similarities**: both are reactive systems that trigger a re-render/DOM update when state changes; both distinguish "local state" from "derived state" (`isFormValid` is computed from `formData` in both).

**Differences**: React state is immutable by convention — you always replace it via a setter, never mutate in place, which is why `handleChange` needs spread syntax. Vue state is a mutable proxy — you write to it directly, and the Vue-specific "computed" state (`computed(() => ...)` vs. our React project's plain `const isFormValid = ...` recalculated on every render) is memoized and only recalculates when a dependency changes. React also needs one `useState` call per independent piece of state or a manual merge, whereas Vue's `reactive` groups related fields under one object without extra boilerplate.

---

## Lifecycle

**React**'s `Insights.jsx` fetches data with `useEffect` and an empty dependency array to mimic "on mount":
```jsx
useEffect(() => {
  const loadData = async () => {
    try { setInsightsList(await getInsights()); }
    catch (err) { setError(err.message); }
  };
  loadData();
}, []);
```

**Vue**'s `Insights.vue` uses the explicit `onMounted` lifecycle hook:
```js
onMounted(async () => {
  try { insightsList.value = await getInsights(); }
  catch (err) { error.value = err.message; }
});
```

**Similarities**: both run once after the component is first rendered, both are used here for the same purpose (fetch data on mount), both can be `async`.

**Differences**: React's `useEffect` is a single, generic API that covers mount, update *and* unmount/cleanup depending on its dependency array — the "run once" behavior is a side effect of passing `[]`, which is a common source of confusion for beginners. Vue splits lifecycle into named, purpose-specific hooks (`onMounted`, `onUpdated`, `onUnmounted`, etc.), making the intent explicit at the call site rather than inferred from a dependency array.

---

## Conditional rendering

**React** relies on JS operators inside JSX: `&&` for "render if truthy", ternaries for either/or.
```jsx
{error && <div>...</div>}
{isSending ? "Sending..." : (<>Send message</>)}
```

**Vue** has dedicated directives: `v-if` / `v-else`.
```vue
<div v-if="error">...</div>
<span v-if="isSending">Sending...</span>
<span v-else>Send message</span>
```

**Similarities**: same outcome — conditionally mount/unmount a DOM subtree.

**Differences**: React's `&&` is a known footgun (`{count && <X/>}` renders `0` if `count` is `0`, since `0` is falsy-but-not-`null`) — not hit in our code since we guard on strings/objects, but it's a class of bug Vue's `v-if` avoids by evaluating a boolean expression, never rendering the raw value. Vue's `v-else`/`v-else-if` also require the sibling elements to be adjacent in the template, whereas React's ternary is just an expression and can be nested/composed freely.

---

## Dynamic rendering (lists)

**React** uses `Array.prototype.map()`, returning an array of JSX elements, each needing an explicit `key` prop:
```jsx
{insightsList.map((item, index) => (
  <InsightCard key={index} insight={item} index={index} />
))}
```

**Vue** uses the `v-for` directive with a `:key` binding:
```vue
<InsightCard v-for="(item, index) in insightsList" :key="index" :insight="item" :index="index" />
```

For dynamically-typed components (rendering an icon component chosen at runtime from `data/features.js`), the two projects diverge more:
```jsx
// React — resolve the component reference, then render it as JSX
const IconComponent = item.icon;
{IconComponent && <IconComponent className="w-6 h-6 text-white" />}
```
```vue
<!-- Vue — dedicated <component :is="..."> primitive -->
<component :is="item.icon" class="w-6 h-6 text-white" v-if="item.icon" />
```

**Similarities**: both need a stable `key`/`:key` for list diffing; both store the icon reference as data (`data/features.js` is identical in both projects) rather than hardcoding markup per item.

**Differences**: React reuses JS's own `map`, so list rendering is "just JavaScript" (any array method works: `filter`, `slice`, etc., chained before `map`). Vue's `v-for` is declarative and template-scoped but has a dedicated `<component :is>` primitive for dynamic components, which React has no equivalent for — in React, a component reference is *already* usable directly as a JSX tag (`<IconComponent />`), which is arguably simpler here.

---

## Forms

This was the biggest syntax/pattern difference found between the two projects (`Contact.jsx` vs `Contact.vue`).

**React** — "controlled inputs": every field needs `value`, `onChange`, and a shared handler keyed by `name`:
```jsx
<input name="fullName" value={formData.fullName} onChange={handleChange} required />
// handleChange is one function shared by every field:
const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
```
Submission needs manual `e.preventDefault()`:
```jsx
<form onSubmit={handleSubmit}>
```

**Vue** — two-way binding via `v-model`, no change handler needed at all:
```vue
<input v-model="formData.fullName" required />
```
Submission uses the `.prevent` event modifier instead of calling `preventDefault()` in code:
```vue
<form @submit.prevent="handleSubmit">
```

**Similarities**: both projects implement the exact same validation logic (`isFormValid`, min-length check on `message`), the same "sending" state disabling the submit button, and the same simulated async submission with `setTimeout`.

**Differences**: Vue's `v-model` eliminates the entire `handleChange`/`e.target.name`/spread-object pattern that React requires — in this project that's roughly 6 lines of boilerplate removed per form. React's explicitness (you see exactly how state updates on every keystroke) is a tradeoff: more code, but no "magic" — you always know where the update happens. Event modifiers (`.prevent`, also `.stop`, `.once`) are a Vue-only convenience; React always calls `event.preventDefault()` imperatively inside the handler.

---

## Events

**React** uses camelCase synthetic event props matching DOM event names: `onClick`, `onChange`, `onSubmit`. The handler always receives the native (synthetic) event object explicitly.

**Vue** uses the `v-on` directive (shorthand `@`) with lowercase event names: `@click`, `@submit`, `@input`. Handlers can omit the event argument entirely when they don't need it (as in `handleSubmit` in `Contact.vue`, called with no arguments since `v-model` already handles field updates).

**Similarities**: both are declarative, attached inline on the element, and both support inline arrow functions for parameterized handlers.

**Differences**: React handler names must match the exact synthetic event prop (`onSubmit`, not `onsubmit`); Vue's directive works with any native or custom event name as a string (`@my-custom-event` works out of the box for component-to-parent communication via `emit`, which has no direct one-line equivalent in React — React requires passing a callback prop down explicitly).

---

## Project organization

Both projects use **the same folder layout**, which made porting components mechanical rather than architectural:
```
src/
  components/{layout,sections,ui,cards}/
  data/
  services/
  App.(jsx|vue)
  main.(jsx|js)
  global.css
```

**Differences**:
- File extensions carry meaning in Vue (`.vue` triggers SFC compilation) but not in React (`.jsx` is just a JS dialect flag for the bundler).
- React's entry point (`main.jsx`) wraps the app in `<StrictMode>`, a React-only dev-time helper that double-invokes effects/renders to catch bugs; Vue's `main.js` has no equivalent — `createApp(App).mount('#app')` is the whole entry point.
- React needs `prop-types` as an explicit dependency for prop validation; Vue needs nothing extra since `defineProps` is a compiler-level feature.
- Both use Tailwind CSS via `@tailwindcss/vite` and Lucide icons (`lucide-react` vs `lucide-vue-next`) — the styling layer required no adaptation at all.

---

## AI-assisted migration

The Vue version was built as a port of the finished React version, with AI assistance guiding the React → Vue translation component by component.

**What AI tools were used**: Claude (via Claude Code) was used interactively to translate each React component into its Vue SFC equivalent, and to answer configuration questions (Tailwind v4 + Vite plugin setup, ESLint flat config, ESLint plugin for Vue, GitHub Pages deployment strategy for a monorepo with two SPA builds).

**What worked well**:
- Structural translation (JSX → template, `useState`/`useEffect` → `ref`/`reactive`/`onMounted`) was close to 1:1 and error-free — the resulting components (`Header`, `Insights`, `Features`, `InsightCard`) compiled and rendered correctly on the first pass.
- The AI left explanatory comments in the migrated code (still visible in `Contact.vue`, `Insights.vue`) mapping each Vue construct back to its React equivalent — e.g. `// ref() remplace useState()`, `// Le && de React devient un simple v-if` — which made the generated code easier to audit and learn from rather than a black box.
- Data and service files (`data/features.js`, `services/insightsService.js`) needed **zero changes** — framework-agnostic JS ports over directly, confirming that separating data/business logic from components paid off during the migration.

**What required manual corrections**:
- Config files generated in small steps produced a **duplicate `"scripts"` key** in `package.json` (a `lint` script added as a second `"scripts": {...}` block instead of merging into the existing one), which silently deleted the `dev`/`build`/`preview` scripts since JSON parsers keep only the last duplicate key — caught by manually inspecting `npm pkg get scripts` rather than by any tooling.
- The `eslint.config.js` initially had no `ignores` entry, so `npm run lint` linted the built `dist/` bundle (a minified file) and produced dozens of meaningless `no-unused-vars` errors on single-letter minified variable names.
- The `gh-pages` deploy script for the React project was generated with the wrong CLI flag order (`gh-pages -d --add dist`), which is not just a style issue — verified with a real Commander.js parse test that it throws `error: too many arguments`. The fix was reordering to `-d dist --add`.
- `App.vue` briefly had a broken import to a non-existent `HelloWorld.vue` (leftover from the Vite scaffold before the real homepage was wired in) — an easy trap when replacing default Vite boilerplate.

**Lessons learned**:
- AI-assisted translation is very reliable for **mechanical, well-understood mappings** (React hook ↔ Vue reactivity primitive, JSX directive ↔ Vue directive) but far less reliable for **incremental edits to config files** (`package.json`, `eslint.config.js`) — small, additive changes are where silent breakage (duplicate keys, wrong flag order) actually happened, not in the component logic itself.
- Verifying generated shell/CLI commands by actually parsing or running them (e.g. testing the `gh-pages` flag order with Commander directly) caught a bug that reading the command by eye did not.
- Keeping identical folder structure and identical framework-agnostic modules (`data/`, `services/`) between the two projects made the whole migration close to mechanical, and is the single biggest reason the port went smoothly.
