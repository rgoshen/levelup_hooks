# React Hooks for Everyone

[![reactjs](/assets/images/reactjs.png)](https://reactjs.org/)

[![React](https://img.shields.io/badge/Docs-React-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)](https://reactjs.org/docs/getting-started.html)

## Table of Contents

- [React Hooks for Everyone](#react-hooks-for-everyone)
  - [Table of Contents](#table-of-contents)
  - [What are React Hooks](#what-are-react-hooks)
  - [useState](#usestate)

## What are React Hooks

[React Hooks Docs](https://reactjs.org/docs/hooks-intro.html)

- Hooks are a new addition in React 16.8. They let you use state and other React features for function based components without writing a class.

[top](#table-of-contents)

## useState

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
