import React from 'react'
import Navbar from './components/Navbar'
import Create from './components/Create'
import { BrowserRouter,Route,Routes  } from 'react-router-dom'
import Read from './components/Read'
import Update from './components/Update'


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Create/>}></Route>
      <Route path='/read' element={<Read/>}></Route>
      <Route path='/edit/:id' element={<Update/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App