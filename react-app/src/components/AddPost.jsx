import React from "react";

class AddPost extends React.Component {
    render() {
        return (
            <div class='max-w-2xl mx-auto rounded-xl bg-primary'>
                <p class='text-white mx-5 pt-5 font-semibold text-xl'>Create Post</p>
                <div class='grid grid-cols-3 gap-2'>
                    <div class='col-start-1 col-span-1 bg-slate-600 rounded-md mx-5 mt-5 mb-2'>
                        <form action="/">
                            <input type="text" placeholder='Your Name..' class='input input-bordered input-sm bg-slate-400 placeholder-gray-700' />
                        </form>
                    </div>
                    <div class='col-start-1 col-end-4 bg-slate-600 rounded-md mx-5 mb-2'>
                        <textarea id='post' rows='5' class='block rounded-md w-full bg-slate-400 placeholder-gray-700' placeholder='Your post goes here..'></textarea>
                    </div>
                    <div class='col-start-1 col-end-4 bg-accent rounded-md mx-5 mb-5'>
                        <p class='text-center'><a class="btn btn-ghost normal-case text-3xl text-black text-center font-bold hover:text-cyan-400 my-1.5" href='#'>LAUNCH!</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddPost;