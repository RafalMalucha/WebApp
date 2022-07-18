import React, {useState} from "react";

const NewPost = () => {
    const [postContent, setPostContent] = useState('');
    

        return (
            <div class='max-w-2xl mx-auto rounded-xl bg-primary/75'>
                <p class='text-white mx-5 pt-5 font-semibold text-2xl'>skrrrrr</p>
                <div class='grid grid-cols-3 gap-2'>
                    <div class='col-start-1 col-end-4 bg-slate-600 rounded-md mx-5 mb-2'>
                        <textarea id='post' rows='5' class='block rounded-md w-full bg-slate-400 placeholder-gray-700' placeholder='Your post goes here..'></textarea>
                    </div>
                    <div class='col-start-1 col-end-4 bg-accent rounded-md mx-5 mb-5'>
                        <p class='text-center'>
                            <button type='btn btn-ghost' onClick={console.log('aaaaa')}>
                                <p class='normal-case text-3xl text-black text-center font-bold hover:text-cyan-400 mt-1 mb-2'>BRRR</p>
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        )
    }

export default NewPost;