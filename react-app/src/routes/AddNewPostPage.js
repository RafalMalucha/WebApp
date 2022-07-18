import React from 'react'
import Navbar from '../components/Navbar'
import NewPost from '../components/AddPost'

const AddNewPostPage = () => {
  return (
    <>
        <Navbar />
        <div class='hero min-h-screen bg-[url("./img/bg.jpg")] mx-auto w-min-full'>
            <NewPost />
        </div>
        <div class='footer p-10 mb-[-10px] bg-accent text-black'>

        </div>
    </>
  )
}

export default AddNewPostPage