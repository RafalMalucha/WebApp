import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div class='navbar fixed bg-primary top-0'>
            <div class='navbar-start'>
                <svg class="svg-icon mb-1.5" viewBox="0 0 20 20">
					<polygon fill="none" points="18.198,7.95 3.168,7.95 3.168,8.634 9.317,9.727 9.317,19.564 12.05,19.564 12.05,9.727 18.198,8.634 "></polygon>
					<path fill="none" d="M2.485,10.057v-3.41H2.473l0.012-4.845h1.366c0.378,0,0.683-0.306,0.683-0.683c0-0.378-0.306-0.683-0.683-0.683H1.119c-0.378,0-0.683,0.306-0.683,0.683c0,0.378,0.306,0.683,0.683,0.683h0.683v4.845C1.406,6.788,1.119,7.163,1.119,7.609v2.733c0,0.566,0.459,1.025,1.025,1.025c0.053,0,0.105-0.008,0.157-0.016l-0.499,5.481l5.9,2.733h0.931C8.634,13.266,5.234,10.458,2.485,10.057z"></path>
					<path fill="none" d="M18.169,6.584c-0.303-3.896-3.202-6.149-7.486-6.149c-4.282,0-7.183,2.252-7.484,6.149H18.169z M15.463,3.187c0.024,0.351-0.103,0.709-0.394,0.977c-0.535,0.495-1.405,0.495-1.94,0c-0.29-0.268-0.418-0.626-0.394-0.977C13.513,3.827,14.683,3.827,15.463,3.187z"></path>
					<path fill="none" d="M18.887,10.056c-2.749,0.398-6.154,3.206-6.154,9.508h0.933l5.899-2.733L18.887,10.056z"></path>
				</svg> 
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
                <a class="btn btn-ghost normal-case text-3xl text-accent font-bold hover:text-cyan-400 mb-1.5" href='#'>ReAPP</a>
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
        <div class='container bg-base-100 h-20 w-max'></div>
    </div>
  )
}

export default Navbar