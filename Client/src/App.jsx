import { BrowserRouter, Routes , Route } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import { CartProvider } from './Components/Context/CartContext';


import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
// import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer';

import fiction_banner from './Components/Assets/fiction_banner.jpg'
import nonfiction_banner from './Components/Assets/nonfiction_banner.jpg'
import business_banner from './Components/Assets/business_banner.jpg'


function App() {

  return (
    <div>
      <BrowserRouter>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/fiction' element={<ShopCategory banner={fiction_banner} Category="fiction"/>}/>
          <Route path='/non-fiction' element={<ShopCategory banner={nonfiction_banner} Category="non-fiction"/>}/>
          <Route path='/business' element={<ShopCategory Catego banner={business_banner}ry="business"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
            
          </Route>
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/login' element={<LoginSignup/>}/> */}
        </Routes>
        <Footer/>
      </CartProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
