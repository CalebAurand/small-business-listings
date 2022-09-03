import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './containers/Home'

  /*<Route path="/" element={<Home />} />*/ /*example of a component without redux*/
  /* <Route path="/listing/:id" component={Home} /> */

const Router = () => (
  <Routes>
  
    <Route exact path="/" element={<Home />} /> {/* example of a container with redux*/}
    
  </Routes>
)

export default Router