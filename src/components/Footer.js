import React from 'react'

export default function Footer( {todos} ) {
  return (
    <div className="footer">
        <span>Current task(s): {todos} </span>
    </div>
  )
}
