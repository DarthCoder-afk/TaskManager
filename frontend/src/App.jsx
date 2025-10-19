import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App
