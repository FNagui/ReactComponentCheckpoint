import React from 'react';
import './App.css';
import Product from './product';

function App() {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly", marginLeft:"100px"}}>
      <Product id={1}/>
      <Product id={2}/>
      <Product id={3}/>     
    </div>
  );
}

export default App;
