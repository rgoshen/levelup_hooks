import React, { useState, useContext } from 'react';
import { UserContext } from './App';

const Toggle = () => {
  const [isToggled, setIsToggled] = useState(false);
  const userInfo = useContext(UserContext);
  console.log('userInfo', userInfo);

  if (!userInfo.user) return null;

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      {isToggled && <h2>Hello</h2>}
    </div>
  );
};

export default Toggle;

// import React, { Component } from 'react';

// export default class Refactor extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggled: false };
//   }

//   toggle() {
//     this.setState((state) => {
//       return { isToggled: !state.isToggled };
//     });
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.toggle}>Toggle</button>
//         {this.state.isToggled && <h2>Hello!</h2>}
//       </div>
//     );
//   }
// }
