import React from 'react'

const Navbar = () => {
  return (
    <div class='navbar fixed bg-primary top-0'>
        <div class='navbar-start'>
            <div class='dropdown'>
                <label tabindex='0' class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-accent"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <ul tabindex='0' class='menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52 text-accent'>
                    <li><a class='hover:text-cyan-400'>Your Posts</a></li>
                    <li><a class='hover:text-cyan-400'>Bruh</a></li>
                    <li><a class='hover:text-cyan-400'>Bruh 2 electric boogaloo</a></li>
                </ul>
            </div>
        </div>
        <div class='navbar-center'>    
            <a class="btn btn-ghost normal-case text-3xl text-accent font-bold italic hover:text-cyan-400 mb-1.5" href='#'>ReAPP</a>
        </div> 
        <div class='navbar-end'>   
            <button class='btn rounded-full text-black bg-accent hover:bg-cyan-400 mx-2.5 border-black'>
                <a>Sign in</a>
            </button>
            <button class='btn rounded-full text-black bg-accent hover:bg-cyan-400 border-black'>
                <a>Sign up</a>
            </button>
        </div>
    </div>
  )
}

export default Navbar