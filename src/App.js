import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:"Photoshop", price:'$90.99'},
    {name: "Illustrator", price: "$99.00"},
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p> I am a React Person</p>
       <Users></Users>
       <Counter></Counter>
       <Product name={products[0].name} price={products[0].price}></Product>
       <Product name={products[1].name} price={products[1].price}></Product>
       
       <Person name="Nuran" job="Footballer"></Person>
       <Person name="Naha" job="Audience"></Person>
       <Person name="Hemi" job="Designer"></Person>
      
        
        
      </header>
    </div>
  );
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          console.log(users)
        }
        {
          users.map(users => <li>{users.email}</li>)
        }
      </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: 'left'
  }
  return (
    <div style={productStyle}>
      <h2>{props.name}</h2>
      <h5> {props.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props){
  const personStyle={
    border: "2px solid gold",
    width: "400px",
    margin: "10px"
  }
  return (
    <div style={personStyle}>
      <h1>My Name: {props.name}</h1>
  <p>My Proffesion: {props.job}</p>
    </div>
  )
}

export default App;
