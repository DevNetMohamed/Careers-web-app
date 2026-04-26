import React from 'react'
import Sidebar from '../Sidebar/Sidebar.jsx'
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <>
   <Outlet/>
    </>
  )
}
