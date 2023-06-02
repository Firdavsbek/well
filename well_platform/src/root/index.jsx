import React from 'react'
import Sidebar from '../Components/Sidebar'
import Body from '../Components/Body'
import Navbar from '../Components/Navbar'
import {Route}  from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      
      <Route path = {'/page'} component ={Body}/>
      <Route/>
    </div>
  )
}

export default Root