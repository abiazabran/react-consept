import { useEffect } from 'react';
import { useState } from 'react';
import Friend from './Friend';

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div className='text-center bg-red-200'>
      <h1>this my users data</h1>
      <h3>users length : {users.length}</h3>
      {users.map((user) => (
        // eslint-disable-next-line react/jsx-key
        <Friend friend={user} />
      ))}
    </div>
  );
};

export default Users;
