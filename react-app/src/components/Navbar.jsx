import React from 'react'

const Navbar = () => {
  return (
    <div class="navbar sticky bg-primary shadow-xl flex flex-row">
        <div class='basis-1/4'>
            <div class='flex-none'>
                <button class="btn btn-square btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-white"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
            <div class='flex-1'>
                <a class="btn btn-ghost normal-case text-xl text-accent font-bold italic hover:text-cyan-400" href='#'>ReAPP</a>
            </div>
        </div>
        <div class='basis-3/4'>
            <div class='justify-itmes-end'>
                <button class='rounded-full text-white bg-slate-500'>
                    sign in
                </button>
                <button class='rounded-full text-white bg-slate-500'>
                    sign up
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar