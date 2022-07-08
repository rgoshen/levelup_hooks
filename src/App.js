import React, { useRef } from 'react';
import Toggle from './Toggle';
import useTitleInput from './hooks/useTitleInput';
import useAbortableFetch from 'use-abortable-fetch';
import { useSpring, animated } from 'react-spring';

const App = () => {
  const [name, setName] = useTitleInput('');
  const ref = useRef();
  const { data } = useAbortableFetch(
    'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
  );
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <div className='main-wrapper' ref={ref}>
      <animated.h1
        style={props}
        onClick={() => ref.current.classList.add('new-class-name')}
      >
        Level Up Dishes
      </animated.h1>
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
      {data &&
        data.map((dish) => (
          <article className='dish-card dish-card--withImage' key={dish.name}>
            <h3>{dish.name}</h3>
            <p>{dish.desc}</p>
            <div className='ingredients'>
              {dish.ingredients.map((ingredient) => (
                <span key={ingredient}>{ingredient}</span>
              ))}
            </div>
          </article>
        ))}
    </div>
  );
};

export default App;
