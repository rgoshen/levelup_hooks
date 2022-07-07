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
      {/* <h3>{name}</h3> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // formSubmit(name, setName);
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

// const formSubmit = (value, setValue) => {
//   console.log(`email sent to ${value}`);
//   setValue('');
// };

export default App;
