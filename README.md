# React Hooks for Everyone

[![reactjs](/assets/images/reactjs.png)](https://reactjs.org/)

[![React](https://img.shields.io/badge/Docs-React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/docs/getting-started.html)

## Table of Contents

- [React Hooks for Everyone](#react-hooks-for-everyone)
  - [Table of Contents](#table-of-contents)
  - [What are React Hooks](#what-are-react-hooks)
  - [useState](#usestate)
  - [Refactoring a Class Component](#refactoring-a-class-component)
  - [useState Part 2](#usestate-part-2)
  - [useEffect](#useeffect)
  - [Creating Custom Hooks](#creating-custom-hooks)
  - [Use Refs with useRef](#use-refs-with-useref)

## What are React Hooks

[React Hooks Docs](https://reactjs.org/docs/hooks-intro.html)

- Hooks are a new addition in React 16.8. They let you use state and other React features for function based components without writing a class.
- A Hook is a special function that lets you “hook into” React features.
- When would I use a Hook? If you write a function component and realize you need to add some state to it, previously you had to convert it to a class. Now you can use a Hook inside the existing function component.

[top](#table-of-contents)

## useState

[useState Docs](https://reactjs.org/docs/hooks-state.html)

- can only be used on a function based component, not on a class based component
  - on a class based component, you just use state as normal

`const [value, setValue] = useState(intialState);`

_/src/App.js_

```javascript
import React, { useState } from 'react';

const App = () => {
  const [name, setName] = useState('');
  return (
    <div className='main-wrapper'>
      <h1>Level Up Dishes</h1>
      <h3>{name}</h3>
      <input
        type='text'
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>
  );
};

export default App;
```

[top](#table-of-contents)

## Refactoring a Class Component

Class-based component

_src/Toggle.js_

```javascript
import React, { Component } from 'react';

export default class Refactor extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
  }

  toggle() {
    this.setState((state) => {
      return { isToggled: !state.isToggled };
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        {this.state.isToggled && <h2>Hello!</h2>}
      </div>
    );
  }
}
```

Function-based component

_src/Toggle.js_

```javascript
import React, { useState } from 'react';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled && <h2>Hello</h2>}
    </div>
  );
};

export default Toggle;
```

[top](#table-of-contents)

## useState Part 2

[useState Docs](https://reactjs.org/docs/hooks-state.html)

[top](#table-of-contents)

## useEffect

[useEffect Docs](https://reactjs.org/docs/hooks-effect.html)

- The Effect Hook lets you perform side effects in function components
  - Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.

> ❗ **Tip**
>
> If you’re familiar with React class lifecycle methods, you can think of `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined.

- There are two common kinds of side effects in React components: those that don’t require cleanup, and those that do
  - Sometimes, we want to **run some additional code after React has updated the DOM**
  - Network requests, manual DOM mutations, and logging are common examples of effects that don’t require a cleanup
- some effects do require cleanup, **we might want to set up a subscription** to some external data source

  - it is important to clean up so that we don’t introduce a memory leak!

- with `useEffect` will run after React has updated the DOM

[top](#table-of-contents)

## Creating Custom Hooks

[Docs](https://reactjs.org/docs/hooks-custom.html)

- Building your own Hooks lets you extract component logic into reusable functions

_src/App/js_

```javascript
import React, { useState, useEffect } from 'react';
import useTitleInput from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');

  return (
    <div className='main-wrapper'>
      <h1>Level Up Dishes</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
```

_src/hooks/useTitleInput.js_

```javascript
import { useState, useEffect } from 'react';

export default function useTitleInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    document.title = value;
  });

  return [value, setValue];
}
```

[top](#table-of-contents)

## Use Refs with useRef

[useRef Docs](https://reactjs.org/docs/hooks-reference.html#useref)

- `useRef` returns a mutable ref object whose `.current` property is initialized to the passed argument (`initialValue`)
- The returned object will persist for the full lifetime of the component.
- handy for keeping any mutable value around similar to how you’d use instance fields in classes
- Mutating the `.current` property doesn’t cause a re-render
- hooks way to interact with DOM nodes via refs

_src/App.js_

```javascript
import React, { useState, useEffect, useRef } from 'react';
import Toggle from './Toggle';
import useTitleInput from './hooks/useTitleInput';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  // will be undefined on initial DOM load
  // however, after the DOM is loaded and re-rendered, then
  // ref.current will populate with div object
  // console.log('ref', ref.current);

  return (
    <div className='main-wrapper' ref={ref}>
      {/* <h1 onClick={() => console.log(ref.current.className)}> */}
      <h1 onClick={() => ref.current.classList.add('new-class-name')}>
        Level Up Dishes
      </h1>
      <Toggle />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
```

1. attach a reference to a DOM element
2. create a new reference

[top](#table-of-contents)
