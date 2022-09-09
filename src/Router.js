import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './containers/Home'
import Details from './containers/Details'
import Login from './containers/Login'

  /*<Route path="/" element={<Home />} />*/ /*example of a component without redux*/
  /* <Route path="/listing/:id" component={Home} /> */

const Router = () => (
  <Routes>
  
    <Route exact path="/" element={<Home />} /> {/* example of a container with redux*/}
    <Route path="/details/:id" element={<Details />} />
    <Route path="/login" element={<Login />} />
    
  </Routes>
)

export default Router