import React from 'react'
import Navbar from '../components/Navbar'
import Register from '../components/SignUp'

const RegisterPage = () => {
  return (
    <>
        <Navbar />
        <div class='hero min-h-screen bg-[url("./img/bg.jpg")] mx-auto w-min-full'>
            <Register />
        </div>
        <div class='footer p-10 mb-[-10px] bg-accent text-black'>

        </div>
    </>
  )
}

export default RegisterPage