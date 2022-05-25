import React from 'react'
import AdminMainContainer from '../components/AdminMainContainer'
import AdminNavbar from '../components/AdminNavbar'
import AdminSideBar from '../components/AdminSideBar'
// import { Routes, Route, Link } from "react-router-dom";

const AdminDashboard = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const setIsOpenFunction = () => {
    setIsOpen(!isOpen)
  }
  const [currentTab, setCurrentTab] = React.useState("Dashboard")
  const setCurrentTabFunction = (tab) => {
    setCurrentTab(tab)
  }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
    
    }}>
      <div >
        <AdminNavbar setIsOpenFunction={setIsOpenFunction} />

      </div>
      <div style={{
        display: 'flex',
      }}>

        <AdminSideBar isOpen={isOpen}
          setIsOpenFunction={setIsOpenFunction}
          setCurrentTabFunction={setCurrentTabFunction}
          currentTab={currentTab}
        />
      
        <AdminMainContainer currentTab={currentTab} >
          
      
        </AdminMainContainer>
      </div>
    </div>
  )
}

export default AdminDashboard