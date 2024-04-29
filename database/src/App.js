
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Admin'
import {useState, useEffect} from 'react'
import './App.css';
import products from './Defaultproducts/Products';

function App() {
  let[productlist, setproductlist] = useState([])
  let [counter, setcounter] = useState(0)


  
  return (
    <div className="App">
      <BrowserRouter>
      <h1>HEADER</h1>
      <Routes>
      <Route path="/" element={<h1>HOME</h1>}/>
      <Route path="/admin" element={<Admin productlist={productlist} setproductlist={setproductlist}/>}/>
      <Route path="/home" element={<h1>Home</h1>}/>

      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;




/*useEffect(()=>{
  setcounter((prevstate)=>prevstate + 1)
  console.log(counter)
  let lStorage = JSON.parse(localStorage.getItem("products"));
  if(lStorage.length){
    console.log(productlist)
    let data = JSON.parse(localStorage.getItem("products"));
    setproductlist(data);
  
    
    console.log("DATA EXISTS")
  } else {
    console.log("DATA EMPTY...LOADING")
    let stringifiedproducts = JSON.stringify(products);
    localStorage.setItem("products", stringifiedproducts)
    let newdata = localStorage.getItem("products");
    setproductlist([...productlist])
   
  }
}
, [])*/
