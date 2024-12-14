# Vue.js

Vue.js is a progressive JavaScript framework for building user interfaces.

## Key Features

- **Progressive Framework**: Can be adopted incrementally
- **Reactive Data**: Automatic UI updates when data changes
- **Component System**: Modular and reusable components
- **Virtual DOM**: Efficient rendering engine

## Getting Started

```bash
npm create vue@latest my-vue-app
cd my-vue-app
npm install
npm run dev
```

## Basic Component

```vue
<template>
  <div>
    <h1>{{ greeting }}</h1>
    <button @click="changeGreeting">Change Greeting</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const greeting = ref('Hello Vue!')
const changeGreeting = () => {
  greeting.value = 'Hello World!'
}
</script>
```

## Composition API Example

```vue
<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const doubled = computed(() => count.value * 2)

function increment() {
  count.value++
}
</script>
```