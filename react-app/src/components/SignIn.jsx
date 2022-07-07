import React from "react";

class SignIn extends React.Component {
    render() {
        return (
            <div class='max-w-2xl mx-auto rounded-xl bg-primary'>
                <p class='text-white mx-5 pt-5 font-semibold text-xl'></p>
                <div class='grid grid-cols-3 gap-2'>
                    <div class='col-start-1 col-end-3 bg-slate-600 rounded-md mx-5 mt-1.5 mb-2'>
                        <form action="/">
                            <input type="text" placeholder='e-mail..' class='input input-bordered input-sm bg-slate-400 placeholder-gray-700 w-full' />
                        </form>
                    </div>
                    <div class='col-start-1 col-end-3 bg-slate-600 rounded-md mx-5 mt-1.5 mb-2'>
                        <form action="/">
                            <input type="text" placeholder='password..' class='input input-bordered input-sm bg-slate-400 placeholder-gray-700 w-full' />
                        </form>
                    </div>
                    <div class='col-start-1 col-end-4 bg-accent rounded-md mx-5 my-1.5'>
                        <p class='text-center'><a class="btn btn-ghost normal-case text-3xl text-black text-center font-bold hover:text-cyan-400 my-1.5" href='#'>SIGN IN</a></p>
                    </div>
                    <div class='containter bg-primary h-3 ml-5'></div>
                </div>
            </div>
        )
    }
}

export default SignIn;