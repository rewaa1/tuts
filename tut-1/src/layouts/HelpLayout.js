import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function HelpLayout() {
  return (
    <div className="help-layout">
        <h1>Help</h1>
    <nav>
        <NavLink to="Faq">view faq</NavLink>
        <NavLink to="Contact">Contact us</NavLink>
    </nav>
        <Outlet/>
    </div>
    
  )
}
