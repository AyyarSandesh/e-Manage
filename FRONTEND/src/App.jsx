import React from 'react'
import Home from './Home/Home'
import { Route, Routes } from "react-router-dom"
import EmployeeList from './EmployeeList/EmployeeList'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/EmployeeList" element={<EmployeeList/>}/>
      </Routes>
    </>
  )
}

export default App