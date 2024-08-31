import { useState } from 'react';

const Obj = () => {
  const [state, setstate] = useState({
    title: '',
    des: '',
  });
  const { title, des } = state;
  return (
    <div>
      <p>{title}</p>
      <input
        className='border-2 border-green-500'
        type='text'
        value={title}
        onChange={(e) =>
          setstate({
            ...Obj,
            title: e.target.value,
          })
        }
      />

      <p>{des}</p>
      <input
        className='border-2 border-red-500'
        type='text'
        value={des}
        onChange={(e) =>
          setstate({
            ...Obj,
            des: e.target.value,
          })
        }
      />
    </div>
  );
};

export default Obj;
