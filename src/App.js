import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App ()
{
  return (
    <div className='App'>
      {/* <Counter></Counter> */ }
      <ExternalUsers> </ExternalUsers>
    </div>
  );
}

function ExternalUsers (){
  const [ users, setUsers ] = useState( [] )
  useEffect( () =>
  {
    fetch( 'https://jsonplaceholder.typicode.com/users' )
      .then( res => res.json() )
      .then(data=>setUsers(data))
  },[])
  return (
    <div>
      <h2>External Users</h2>
      <p>{ users.length }</p>
      {users.map(user =><User name={user.name} email={user.email}></User>)}      
    </div>
  )
}

function User (props)
{
  return (
    <div style={{border:'2px solid red', margin:'20px', background:'lightblue'}}>
      <h3>Name: {props.name}</h3>  
      <h3>Email: {props.email}</h3>  
      <h3>Address: {props.email}</h3>  
    </div>
  )
}

function Counter ()
{
  const [count, setCount] = useState(33)
  const increaseCount = () =>setCount(count+1 );
  const decreaseCount = () =>setCount(count-1 );
  
  
  // const [count, setCount] = useState(33)
  // const increaseCount = () =>{
  //   const newCount = count + 1;
  //   setCount( newCount );
  // }
  
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>Increase </button>
      <button onClick={decreaseCount}>Decrease </button>
    </div>
  );
}

// function App ()
// {  
//   const products = [
//     {name:'laptop', price:'$2000'},
//     {name:'mobile', price:'$1500'},
//     {name:'Camera', price:'$1000'},
//     {name:'Watch', price:'$500'},
//     {name:'Tablet', price:'$700'}
//   ]
//   return (
//     <div className="App">
//       {
//         products.map(product=><Product name={product.name} price={product.price}></Product>)
//       }
//       {/* <Product name="Laptop" price="$2,000"> </Product>
//       <Product name="Phone" price="$1,500"> </Product>
//       <Product name="Camera" price="$1,800" > </Product>
//       <Product name="Watch" price="$500" > </Product> */}
      
//     </div>
//   );
// }

// function Product(props) {
//   return (
//     <div className="product">
//       <h3>Name: {props.name} </h3>
//       <p>Price: {props.price}</p>
      
//     </div>
//   );
// }

export default App;
