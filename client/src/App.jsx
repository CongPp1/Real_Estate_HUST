/* eslint-disable no-unused-vars */
import React from 'react'
import { Button } from './components/ui/button'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    console.log("App"),
    <div className="text-primary">
      <Outlet />
      {/* <Button variant="default" size="default">Button</Button> */}
    </div>
  )
}
