import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
const nayoks=['Manna','Sakib','Bappy','Suvo','Bapparaj','Jolil',"Mehedi"];
const products = [
  {name:"Book",price:"$90"},
  {name:"Pen",price:"$10"}
];
  return (
    <div className="App">
      <header className="App-header">
         {/* <Product name={products[0].name} price={products[0].price}></Product> */}
         <ul>
           {
             nayoks.map(nayok=><li>{nayok}</li>)
           }
         </ul>
         <Counter></Counter>
         <Users></Users>
         <Product product={products[0]}></Product>
         <Product product={products[1]}></Product>
        <Person name ="ZA Rakib" id='101'></Person>
        <Person name="Nitu Pakhi" id='102'></Person>
        <Person name ="Dip"></Person>
        <Person></Person>
      </header>
    </div>
  );
}
function Person(props) {
  return (
    <div style={{border: '2px solid red',margin:'10px'}}>
      <h1 >Name : {props.name} <br/>
        Id = {props.id}</h1>
    </div>
  )
}
function Counter() {
 const [count, setCount]=useState(10);

  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
      <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}
function Users() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data))
  },[])
  return (
    <div>
      <h3>Dynamic Users :{users.length} </h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )

}
function Product(props) {
  const productStyle ={
    border:'2px solid red',
    height :'250px',
    width: '250px',
    borderRadius:'10px',
    backgroundColor:'blue',
    margin:'10px'
  }
const{name ,price }= props.product;
  return(
    <div style={productStyle}>
      <h1> {name} {price}</h1>
      
      <button>Buy Now</button>
    </div>
  )
  
}

export default App;
