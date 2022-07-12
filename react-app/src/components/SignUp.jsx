import React, { useState } from 'react'
import { UserAuth } from '../contexts/AuthContext';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { createUser } = UserAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await createUser(email, password)
        } catch (e) {
            setError(e.message);
            console.log(e.message);
        }
    };

    return (
    <>
        <div class='max-w-2xl mx-auto rounded-xl bg-primary/75'>
            <p class='text-white mx-5 pt-5 font-semibold text-xl'></p>
            <form class='grid grid-cols-5 gap-2' onSubmit={handleSubmit}>
                <div class='col-start-2 col-end-5 bg-slate-600 rounded-md mx-5 mt-1.5 mb-2'>                   
                    <input 
                    type="email" 
                    placeholder='e-mail..' 
                    onChange={(e) => setEmail(e.target.value)}
                    class='input input-bordered input-sm bg-slate-400 placeholder-gray-700 w-full'
                    required />                    
                </div>
                <div class='col-start-2 col-end-5 bg-slate-600 rounded-md mx-5 mt-1.5 mb-2'>
                    <input 
                    type="password" 
                    placeholder='password..' 
                    onChange={(e) => setPassword(e.target.value)}
                    class='input input-bordered input-sm bg-slate-400 placeholder-gray-700 w-full max-w-full'
                    required />
                </div>
                <div class='col-start-1 col-end-6 bg-accent rounded-md mx-5 my-1.5'>
                    <p class='text-center'>
                        <button type='btn btn-ghost'>
                            <p class='normal-case text-3xl text-black text-center font-bold hover:text-cyan-400 mt-1 mb-2'>SIGN UP</p>
                        </button>
                    </p>
                </div>
            </form>
        </div>
    </>
  )
}

export default Register