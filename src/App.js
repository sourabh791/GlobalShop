// // import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// import Header from './Components/Header';
// import Home from './Modules/Home';
// import Footer from './Components/Footer';
// import {Routes, Route} from 'react-router-dom';
// import Product from './Modules/Product';
// import Products from './Modules/Products';






// function App() {
//   return (
//     <div className="">
//       <Header/>
//       <Routes>
//         <Route path='/' element={<Home/>}/>
//        <Route path='products/:id' element={<Product/>}/>
//        <Route path='products' element={<Products/>}/>
//         <Route path='*' element={<div>404</div>}/>
//       </Routes>
     
//       <Footer/>
      
//     </div>
//   );
// }

// export default App;


import './App.css';
import React from 'react';
import Header from './Components/Header';
import Home from './Modules/Home';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Product from './Modules/Product';
import Products from './Modules/Products';
import CategoryProducts from './Modules/CategoryProducts';
import Cart from './Modules/Cart';





function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path='products' element={<Products/>}/>
        <Route path='/categories/:name' element={<CategoryProducts/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;



