# React

React is a JavaScript library for building user interfaces, particularly single-page applications.

## Key Features

- **Component-Based**: Build encapsulated components that manage their own state
- **Virtual DOM**: Efficient rendering through virtual DOM diffing
- **JSX**: Declarative syntax for describing UI
- **Unidirectional Data Flow**: Predictable state management

## Getting Started

```bash
npx create-react-app my-app
cd my-app
npm start
```

## Basic Component

```jsx
import React from 'react';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export default Welcome;
```

## Hooks Example

```jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Best Practices

1. Keep components small and focused
2. Use functional components with hooks
3. Implement proper state management
4. Follow the React component lifecycle