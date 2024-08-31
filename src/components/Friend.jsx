// eslint-disable-next-line react/prop-types
const Friend = ({ friend }) => {
  console.log(friend);
  // eslint-disable-next-line react/prop-types
  const { name, email } = friend;
  return (
    <div className='border-2 border-pink-400 m-3'>
      <h1> Name :{name}</h1>
      <h4> Email : {email ? email : 'vjsdhvj'}</h4>
    </div>
  );
};

export default Friend;
