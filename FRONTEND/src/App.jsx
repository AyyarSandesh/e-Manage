import React from 'react'
import Home from './Home/Home'
import { Navigate, Route, Routes } from "react-router-dom"
import EmployeeList from './EmployeeList/EmployeeList'
import toast, { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
import Admin from './Admin/Admin'
import Login from './components/Login'
function App() {
  const [authUser,setAuthUser]=useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}></Route>
        <Route path="/EmployeeList" element={authUser?<EmployeeList/>:<Navigate to="/"/>}/>
      </Routes>
      <Toaster/>
    </>
  )
}

export default App