import Home from '../pages/Home'
import Login from '../pages/Login'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import React from 'react'
import { Route, Routes,Navigate} from 'react-router-dom'
import ThankYou from '../pages/ThankYou'
function Routers() {
  return (
      <Routes>
        <Route path='/' element={<Navigate to = '/home'/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/tours/:id' element={<TourDetails/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/thank-you' element={<ThankYou/>}/>
        <Route path='/tours/search' element={<SearchResultList/>}/>
      </Routes>
  )
}

export default Routers