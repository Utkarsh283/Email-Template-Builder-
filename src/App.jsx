import { useState } from 'react'
import Editor from './components/Editor.jsx'
import Sidebar from './components/Sidebar.jsx'


function App() {
  

  return (
    <div className='flex flex-wrap justify-around align-center h-screen w-screen'>
      
      <div><Sidebar /></div>
      <div><Editor /></div>
    </div>
  )
}

export default App
