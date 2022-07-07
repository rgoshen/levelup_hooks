import React, { useState } from 'react';
import DishForm from './DishForm';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      {isToggled ? (
        <DishForm setIsToggled={setIsToggled} />
      ) : (
        <button onClick={() => setIsToggled(!isToggled)}>Add Dish</button>
      )}
    </div>
  );
};

export default Toggle;
