# Svelte

Svelte is a radical new approach to building user interfaces that shifts work into the compile step.

## Key Features

- **No Virtual DOM**: Direct DOM manipulation
- **True Reactivity**: Compile-time reactivity
- **Less Code**: Minimal boilerplate
- **Built-in Animations**: Easy transitions

## Getting Started

```bash
npm create vite@latest my-svelte-app -- --template svelte
cd my-svelte-app
npm install
npm run dev
```

## Basic Component

```svelte
<script>
  let count = 0;
  
  function increment() {
    count += 1;
  }
</script>

<h1>Count: {count}</h1>
<button on:click={increment}>
  Increment
</button>

<style>
  h1 {
    color: #333;
  }
  
  button {
    background: #ff3e00;
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 4px;
  }
</style>
```

## Reactive Declarations

```svelte
<script>
  let count = 0;
  $: doubled = count * 2;
  $: if (count >= 10) {
    alert('Count is getting high!');
  }
</script>

<h1>Count: {count}</h1>
<p>Doubled: {doubled}</p>
```