import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Home from '../Pages/Home'
import Result from '../Pages/MainPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Result/>}/>    
    </Routes>
  )
}

export default AllRoutes