import React, { useState, useEffect, useRef } from 'react';
import Toggle from './Toggle';
import useTitleInput from './hooks/useTitleInput';
import useAbortableFetch from 'use-abortable-fetch';

const App = () => {
  const [name, setName] = useTitleInput('');
  // const [dishes, setDishes] = useState([]);
  const ref = useRef();
  const { data, loading } = useAbortableFetch(
    'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
  );

  if (!data) return null;

  // const fetchDishes = async () => {
  //   console.log('fetching dishes...');
  //   const res = await fetch(
  //     'https://my-json-server.typicode.com/leveluptuts/fakeapi/dishes'
  //   );
  //   const data = await res.json();
  //   setDishes(data);
  // };

  // useEffect(() => {
  //   fetchDishes();
  // }, []);

  return (
    <div className='main-wrapper' ref={ref}>
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
      {/* {dishes.map((dish) => ( */}
      {data.map((dish) => (
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
