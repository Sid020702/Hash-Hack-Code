import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/home.component'
const AllRoutes = () => {

    return (
        <Routes>
            <Route exact path="/" element={<HomePage />} />
        </Routes>
    )
}


export default AllRoutes