import { useState } from 'react';

const State = () => {
  const [Count, setCount] = useState(0);

  const handelAdd = () => {
    const newCount = Count + 1;
    setCount(newCount);
  };
  const handelAdd2 = () => {
    const newCount = Count - 1;
    setCount(newCount);
  };

  return (
    // <div className='text-center font-bold text-3xl'>
    //   <h1>Count: {Count}</h1>

    //   <div className='flex gap-8 justify-center items-center'>
    //     <button onClick={handelAdd}>Add</button>
    //     <button onClick={handelAdd2} disabled={Count === 0}>
    //       Subtract
    //     </button>
    //   </div>
    // </div>
    <div className='text-center font-bold text-3xl'>
      <h1>count : {Count}</h1>

      <div className='flex gap-8 justify-center items-center'>
        <button onClick={handelAdd}>Add</button>
        <button onClick={handelAdd2} disabled={Count === 0}>
          Add 2
        </button>
      </div>
    </div>
  );
};

export default State;
