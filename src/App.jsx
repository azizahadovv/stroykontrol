import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Home'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App