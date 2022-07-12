import React from 'react'
import Navbar from '../components/Navbar'
import Login from '../components/SignIn'

const Main = () => {
  return (
    <>
        <div className='bg-[url("./img/bg.jpg")] bg-cover w-full h-[1000px] bg-center'>
            <Navbar />
            <Login />
        </div>
    </>
  )
}

export default Main