import React from 'react'
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './Pages/Cart';
import {Home} from './Pages/Home';

const App=()=>{
  return(
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
  )
}

export default App;