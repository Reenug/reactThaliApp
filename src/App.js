import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './thaliCompos/Navbar';
import Home from './thaliCompos/Home'
import Thali from './thaliCompos/Thali';
import Checkout from './thaliCompos/Checkout'


const App = () => {

  return (

    <>


     <BrowserRouter>
     <Navbar />

     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customizeThali' element={<Thali />} />
        <Route path='/checkout' element={<Checkout />} />
      </Routes>

     </BrowserRouter>
    </>

  );

};


export default App;