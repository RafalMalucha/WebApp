import React from 'react'

const Navbar = () => {
  return (
    <div class='navbar sticky bg-primary'>
        <button class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </button>
        <a class="btn btn-ghost normal-case text-xl text-accent font-bold italic hover:text-cyan-400" href='#'>ReAPP</a>
        <button class='btn rounded-full text-black bg-accent hover:bg-cyan-400 mx-2.5'>
            sign in
        </button>
        <button class='btn rounded-full text-black bg-accent hover:bg-cyan-400'>
            sign up
        </button>
    </div>
  )
}

export default Navbar