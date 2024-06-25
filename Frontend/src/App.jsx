import React from 'react'
import Home from './Home/Home'
import {Route, Routes} from "react-router-dom"
import Courses from './Courses/Courses'
import Signup from './Components/Signup'
import ContactUs from './Contact Us/ContactUs'

function App() {
  return (
    <>
  <div className='dark:bg-slate-900 dark:text-white'>
  <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/courses' element={<Courses />}/>
    <Route path='/signup' element={<Signup />} />
    <Route path='/contactus' element={<ContactUs />} />
  </Routes>
  </div>
    </>
  )
}

export default App
