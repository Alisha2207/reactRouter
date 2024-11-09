import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="shadow shadow-pink-300 sticky z-50 top-0">
            <nav className="bg-white border-pink-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <div >
                        <img
                            src="https://blogadmin.merch.vpsvc.com/hub/wp-content/uploads/99d-uploads/2021/08/The-8-best-logo-maker-apps-for-2021.jpg"
                            className="mr-3 h-12" 
                            alt="Logo"
                        />
                        </div>
                    </Link>
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-pink-500 focus:ring-4 focus:ring-pink-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-pink-500 hover:bg-pink-700 focus:ring-4 focus:ring-pink-700 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink to={"/"}
                                    className={({isActive}) =>
                                        `block py-2 pr-4 ${isActive ? "text-pink-500": "text-gray-00"} pl-3 duration-200 border-b border-pink-700 hover:bg-pink-300 lg:hover:bg-pink-300 lg: hover: rounded lg:border-0 hover:text-pink-700 lg:p-1`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>


                            <li>
                                <NavLink to={"/about"}
                                    className={({isActive}) =>
                                          `block py-2 pr-4 ${isActive ? "text-pink-500": "text-gray-00"} pl-3 duration-200 border-b border-pink-700 hover:bg-pink-300 lg:hover:bg-pink-300 lg: hover: rounded lg:border-0 hover:text-pink-700 lg:p-1`
                                    }
                                >
                                    About 
                                </NavLink>
                            </li>

                            
                            <li>
                                <NavLink to={"/contact"}
                                    className={({isActive}) =>
                                          `block py-2 pr-4 ${isActive ? "text-pink-500": "text-gray-00"} pl-3 duration-200 border-b border-pink-700 hover:bg-pink-300 lg:hover:bg-pink-300 lg: hover: rounded lg:border-0 hover:text-pink-700 lg:p-1`
                                    }
                                >
                                 Contact Us
                                </NavLink>
                            </li>

                             
                            <li>
                                <NavLink to={"/github"}
                                    className={({isActive}) =>
                                          `block py-2 pr-4 ${isActive ? "text-pink-500": "text-gray-00"} pl-3 duration-200 border-b border-pink-700 hover:bg-pink-300 lg:hover:bg-pink-300 lg: hover: rounded lg:border-0 hover:text-pink-700 lg:p-1`
                                    }
                                >
                                 Github
                                </NavLink>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

