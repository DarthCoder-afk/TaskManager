import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage.jsx'
import CreatePage from './pages/CreatePage.jsx'
import TaskDetailPage from './pages/TaskDetailPage.jsx'

const App = () => {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/create" element={<CreatePage />} />
          <Route path="/:id" element={<TaskDetailPage/>}/>
        </Routes>
      </div>
      
    </div>
  )
}

export default App
