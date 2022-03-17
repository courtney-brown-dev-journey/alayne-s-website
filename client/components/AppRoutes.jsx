import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MeetTheArtist from './MeetTheArtist'
import Home from './Home'

function AppRoutes(props) {
  
  return (
    <>
    <Routes>
        <Route 
        exact 
        path="/" 
        element={<Home />} />
        <Route
            exact
            path="/meettheartist"
            element={<MeetTheArtist />}
        />
      </Routes>
    </>
  )
}

export default AppRoutes