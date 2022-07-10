import React from 'react'

const Register = () => {
    return (
    <>
        <div class='max-w-2xl mx-auto rounded-xl bg-primary'>
            <p class='text-white mx-5 pt-5 font-semibold text-xl'></p>
            <form class='grid grid-cols-5 gap-2'>
                <div class='col-start-2 col-end-5 bg-slate-600 rounded-md mx-5 mt-1.5 mb-2'>                   
                    <input id='email'
                    type="email" 
                    placeholder='e-mail..' 
                    class='input input-bordered input-sm bg-slate-400 placeholder-gray-700 w-full'
                    required />                    
                </div>
                <div class='col-start-2 col-end-5 bg-slate-600 rounded-md mx-5 mt-1.5 mb-2'>
                    <input id='password'
                    type="password" 
                    placeholder='password..' 
                    class='input input-bordered input-sm bg-slate-400 placeholder-gray-700 w-full max-w-full'
                    required />
                </div>
                <div class='col-start-1 col-end-6 bg-accent rounded-md mx-5 my-1.5'>
                    <p class='text-center'>
                        <button type='submit'>
                            <a class="btn btn-ghost normal-case text-3xl text-black text-center font-bold hover:text-cyan-400 my-1.5" href='#'>SIGN UP</a>
                        </button>
                    </p>
                </div>
                <div class='containter bg-primary h-3 ml-5'></div>
            </form>
            <div>
            </div>
        </div>
    </>
  )
}

export default Register