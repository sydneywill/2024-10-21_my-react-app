// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me
//       </button>
//     </div>
//   );
// }

// export default Counter

import React, { useState } from 'react'; // returns to variable that holds state and also function that you can manipulate state in

function Counter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(prevCount => prevCount + 2); // more accurate
        // setCount(prevCount => prevCount + 1);
        // both updates here correctly use the updated value
      };
    
      return (
        <div>
          <p>You clicked {count} times</p>
          <button onClick={handleClick}>Click me</button>
        </div>
      );
    }
    export default Counter
