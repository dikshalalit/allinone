import React from 'react'
import '../Style/DashBoard.css'
import Navbar from './Navbar'
import SideBar from './Sidebar'

export default function DashBoard() {
  return (
    <div className='Dashview'>
        <SideBar/>
        <div className='rightobject'>
            <Navbar/>
        </div>
    </div>
  )
}
