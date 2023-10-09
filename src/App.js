import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import ProductList from './Components/ProductList.js';
import React,{useState} from 'react';

function App() {

  const products = [
    {
      price: 99999,
      name: "IPhone 10s Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "RedmiNote 10s Max",
      quantity: 0,
    }
  ]

  let [productList , setProductList] = useState(products)

  const incrementQuantity = (index) =>{
    let newProductList = [...ProductList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  }

  return (
    <>
      <Navbar/>
      <main className='container mt-5'>
        <ProductList productList = {productList} incrementQuantity={incrementQuantity}/>
      </main>
      {/*<Footer/>*/}
    </>
  );
}

export default App;
