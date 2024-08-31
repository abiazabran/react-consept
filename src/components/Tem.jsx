import { useState } from 'react';

const Tem = () => {
  const [count, setCount] = useState(0);
  //   const handel = () => {
  //     const newCount = count + 1;
  //     setCount(newCount);
  //   };
  return (
    <div className='text-center font-bold text-3xl'>
      <p>this count</p>
      <h1>count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        add
      </button>
      <button
        className='ml-3'
        onClick={() => {
          setCount(count - 1);
        }}
        disabled={count === 0}
      >
        remove
      </button>
    </div>
  );
};

export default Tem;
