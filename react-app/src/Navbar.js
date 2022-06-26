import './index.css';

function Navbar() {
    return (
        <nav class='top-0 sticky bg-secondary'>
            <div class='flex flex-row'>
                <div class='basis-1/5'>
                    <div class='items-center pl-20 pt-3 pb-4'>
                        <h1 class='text-3xl font-semibold text-accent'>
                            <a href='#'>
                                Reapp
                            </a>
                        </h1>
                    </div>
                </div>
                <div class='basis-1/5'>
                    <div class='pt-5 pb-4'>
                        <div class='flex flex-row'>
                            <div class='basis-1/3'>
                                <a class='text-xl font-bold text-gray-700' href='#'>
                                    thing 1
                                </a>
                            </div>
                            <div class='basis-1/3'>
                                <a class='text-xl font-bold text-gray-700' href='#'>
                                    thing 2
                                </a>
                            </div>
                            <div class='basis-1/3'>
                                <a class='text-xl font-bold text-gray-700' href='#'>
                                    thing 3
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class='basis-2/5'>
                </div>
                <div class='basis-1/5'>
                    <div class='pt-5 pb-4'>
                        <label for='large-toggle' class='inline-flex relative items-center cursor-pointer'>
                            <input type='checkbox' value='' id='large-toggle' class='sr-only peer'></input>
                            <div class="w-14 h-7 bg-gray-200"></div>
                            <span class='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>Light/dark mode switch</span>
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;