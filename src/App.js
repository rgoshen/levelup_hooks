import React, {
  useState,
  useEffect,
  useRef,
  createContext,
  useMemo,
} from 'react';
import Toggle from './Toggle';
import useTitleInput from './hooks/useTitleInput';
import Counter from './Counter';

export const UserContext = createContext();

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  // will be undefined on initial DOM load
  // however, after the DOM is loaded and re-rendered, then
  // ref.current will populate with div object
  // console.log('ref', ref.current);

  // before use of useMemo, this function is called everytime anything
  // is changed (for every rerender of the component), for example,
  // when you type in the text box, this function gets called for every
  // letter that is typed.
  const reverseWord = (word) => {
    console.log('reverseWord called');
    return word.split('').reverse().join('');
  };

  // const TitleReversed = reverseWord('Level Up Dishes'); // not memoized

  // this still calls reverseWord on every re-render
  // const TitleReversed = useMemo( () => reverseWord( 'Level Up Dishes' ) ); // not memoized

  const title = 'Level Up Dishes';
  const TitleReversed = useMemo(() => reverseWord(title), [title]); // memomized

  return (
    // <UserContext.Provider
    //   value={{
    //     user: true,
    //   }}
    // >
    <div className='main-wrapper' ref={ref}>
      {/* <h1 onClick={() => console.log(ref.current.className)}> */}
      <h1 onClick={() => ref.current.classList.add('new-class-name')}>
        {TitleReversed}
      </h1>
      {/* <Toggle /> */}
      {/* <Counter /> */}
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
    // </UserContext.Provider>
  );
};

// const formSubmit = (value, setValue) => {
//   console.log(`email sent to ${value}`);
//   setValue('');
// };

export default App;
