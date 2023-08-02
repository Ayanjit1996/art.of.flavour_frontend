import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Content from './components/base'
import "./App.css"
import About from './components/About'

export const App = () => {
  return (
    <>
      <div className='base_image_home'>
        <Routes>
        <Route exact path='/' element={<Content />} />
          <Route exact path='/signin' element={<Signin />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/about' element={<About/>} />
        </Routes>
      </div>
    </>
  )
}

export default App