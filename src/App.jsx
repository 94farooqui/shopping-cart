import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Topbar from './components/Topbar'
import Main from './components/Main'
import { StoreContext } from './context/StoreConext'
import Cart from './components/Cart'
import RootLayout from './layout/RootLayout'

function App() {
  const {showCart} = useContext(StoreContext)

  return (
    <div className='scrollbar-hidden'>
      <BrowserRouter>
      <Topbar/>
        <Routes>
            <Route path='/' element={<Main/>} />
            <Route path="/cart" element={<Cart/>} />
  
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
