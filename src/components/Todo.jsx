/* eslint-disable react/prop-types */
// // eslint-disable-next-line react/prop-types
// const Todo = ({ task, isDone }) => {
//   if (isDone) {
//     return <li>finish : {task}</li>;
//   }
//   return <li>work on....... : {task}</li>;
// };

// export default Todo;

// eslint-disable-next-line no-unused-vars, react/prop-types
// const Todo = ({ task, isDone }) => {
//   return (
//     <div>
//       <li>
//         {isDone ? 'ses' : 'korte thako'} {task}
//       </li>
//     </div>
//   );
// };

// export default Todo;

// eslint-disable-next-line no-unused-vars
// const Todo = ({ task, isDone }) => {
//   return (
//     <div>
//       {task}
//       {isDone && 'done'}
//     </div>
//   );
// };

// export default Todo;

const Todo = ({ task, isDone }) => {
  return (
    <div>
      {task}
      {isDone || 'working'}
    </div>
  );
};

export default Todo;
