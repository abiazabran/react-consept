const Test = () => {
  const or = false;
  const a = 10;
  const b = 20;
  const person = {
    name: 'shovon',
    age: 30,
  };
  return (
    <div>
      {or ? <button>login</button> : <button>log out</button>}

      <h1>this is my age {a + b}!!!</h1>
      <h2>my name is {person.name}</h2>
    </div>
  );
};

export default Test;
