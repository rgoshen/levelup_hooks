import React, { useRef } from 'react';
import useBodyLockScroll from './hooks/useBodyLockScroll';
import useOnClickOutside from './hooks/useOnClickOutside';

const DishForm = ({ setIsToggled }) => {
  const ref = useRef();

  useBodyLockScroll();
  useOnClickOutside(ref, () => {
    setIsToggled(false);
  });

  return (
    <div className='dish-card' ref={ref}>
      <form>
        <div className='form-row'>
          <label htmlFor='name'>Name: </label>
          <input type='text' id='name' />
        </div>
      </form>
    </div>
  );
};

export default DishForm;
