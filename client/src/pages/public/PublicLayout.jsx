/* eslint-disable no-unused-vars */
import PublicHeader from '@/components/headers/PublicHeader'
import React from 'react'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <div>
      <PublicHeader />
      <Outlet />
    </div>
  )
}

export default PublicLayout