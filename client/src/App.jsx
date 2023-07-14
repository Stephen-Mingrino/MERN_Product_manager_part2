import React, {useState, useEffect} from "react"
import axios from 'axios'
import CreateProducts from "./Components/CreateProducts";
import DisplayAllProducts from "./Components/DisplayAlllProducts"
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [allProducts, setAllProducts] = useState([])
    useEffect ( () => {
      axios.get("http://localhost:8000/api/product")
      .then((res) => setAllProducts(res.data))
    .catch((err)=> console.log(err))
  
  }, []);
  return (
      <BrowserRouter>
      <div>
       
        <Routes>
        <Route  path="/" element={<DisplayAllProducts allProducts={allProducts}/>}/>
      
        <Route path="/newProduct" element={<CreateProducts allProducts={allProducts} setAllProducts={setAllProducts}/>}/> 
        </Routes>
      </div>
      </BrowserRouter>


  )
      
        }


    



export default App;
