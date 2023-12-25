import React from 'react'
import { BrowserRouter , Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
