import React from 'react'
import { Link } from 'react-router-dom'

export default function Not() {
  return (
    <div> 
      <h1>Page not found</h1>
      <p>press on this link to head to <Link to="/"> Homepage</Link>.</p>
    </div>
  )
}
