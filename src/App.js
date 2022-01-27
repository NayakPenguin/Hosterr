import React from 'react'
import DashBoard from './components/DashBoard'
import DashBoardRoomDetails from './components/DashBoardRoomDetails'
import DashBoardRoomChange from './components/DashBoardRoomChange'
import LandingPage from './components/LandingPage'
import LandingPageAdmin from './components/LandingPageAdmin'
import AdminDB from './components/AdminDB'
import AdminDBnew from './components/AdminDBnew'
import AddHostel from './components/AddHostel'
import {
  Routes,
  Route,
} from "react-router-dom";
import AddRooms from './components/AddRooms'
import AddGuestRoom from './components/AddGuestRoom'
import AddCanteen from './components/AddCanteen'
import AdminProfile from './components/AdminProfile'
import Inbox from './components/Inbox'
import AccessLogs from './components/AccessLogs'
import Applications from './components/Applications'
import UserProfile from './components/UserProfile'
import UserCanteen from './components/UserCanteen'
import UserGuestHouse from './components/UserGuestHouse'
import UserContactAdmin from './components/UserContactAdmin'


const App = () => {
  return (
    <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/user/dashboard/home" element={<DashBoard/>} />
          <Route path="/user/dashboard/room/details" element={<DashBoardRoomDetails/>} />
          <Route path="/user/dashboard/room/change" element={<DashBoardRoomChange/>} />
          <Route path="/user/dashboard/profile" element={<UserProfile/>} />
          <Route path="/user/dashboard/canteen" element={<UserCanteen/>} />
          <Route path="/user/dashboard/guest-house/req" element={<UserGuestHouse/>} />
          <Route path="/user/dashboard/contact-admin" element={<UserContactAdmin/>} />

          <Route path="/admin" element={<LandingPageAdmin/>} />
          <Route path="/admin/dashboard" element={<AdminDB/>} />
          <Route path="/admin/dashboard/new-admin" element={<AdminDBnew/>} />
          <Route path="/admin/dashboard/hostel/add" element={<AddHostel/>} />
          <Route path="/admin/dashboard/room/add" element={<AddRooms/>} />
          <Route path="/admin/dashboard/guest-room/add" element={<AddGuestRoom/>} />
          <Route path="/admin/dashboard/canteen/add" element={<AddCanteen/>} />
          <Route path="/admin/dashboard/profile" element={<AdminProfile/>} />
          <Route path="/admin/dashboard/inbox" element={<Inbox/>} />
          <Route path="/admin/dashboard/accesslogs" element={<AccessLogs/>} />
          <Route path="/admin/dashboard/applications" element={<Applications/>} />
        </Routes>
    </div>
  )
}

export default App
