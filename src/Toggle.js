import React, { useState } from 'react';
import DishForm from './DishForm';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled && <DishForm />}
    </div>
  );
};

export default Toggle;
