// import React from 'react'
import {NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <nav className='relative h-16 w-full px-10 bg-black text-white flex items-center justify-between flex-wrap max-md:min-h-20'>
            <div className="logo ">
                    <NavLink
                            to=""
                            className={({ isActive }) =>
                                ` ${
                                isActive ? "text-red-600" : "text-white"
                                } hover:text-red-600   transition-all ease-in`
                            }
                            >
                            <h1>Logo</h1>
                    </NavLink>
            </div>
            <ul className=' flex gap-6 items-center'>
                <li>
                    <NavLink
                    to="run"
                    className={({ isActive }) =>
                        ` ${
                        isActive ? "text-red-600" : "text-white"
                        } hover:text-red-600   transition-all ease-in`
                    }
                    >
                    <h1>One8 Run</h1>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="cafe"
                        className={({ isActive }) =>
                            ` ${
                            isActive ? "text-red-600" : "text-white"
                            } hover:text-red-600   transition-all ease-in`
                        }
                        >
                        <h1>Cafes</h1>
                    </NavLink>
                </li>
                <li>
                <NavLink
                    to="footwear"
                    className={({ isActive }) =>
                        ` ${
                        isActive ? "text-red-600" : "text-white"
                        } hover:text-red-600   transition-all ease-in`
                    }
                    >
                    <h1>Footwear</h1>
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="perfume"
                        className={({ isActive }) =>
                            ` ${
                            isActive ? "text-red-600" : "text-white"
                            } hover:text-red-600   transition-all ease-in`
                        }
                        >
                        <h1>Perfume</h1>
                    </NavLink>
                </li>
                {/* <li>Link4</li> */}
                <button className=" p-2 bg-yellow-600 rounded-lg">
                    Shop Now
                </button>
            </ul>
        </nav>
    </>
  )
}

export default Navbar