import { Link, NavLink } from "react-router-dom";
import navLogo from '../../assets/logo.svg';
import { FaBagShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Navbar = () => {
    let {user,logout}=useContext(AuthContext);
    console.log(user)
    let navLinks = <>
            <li><NavLink to='/'>Home</NavLink></li>  
            <li><NavLink to='/booking'>My Bookings</NavLink></li> 
            {
                user?<div className="flex gap-3 flex-row-reverse items-center"> <h1>{user?.displayName}</h1>   <button onClick={()=>logout()} className="btn">logout</button></div>:
               <li className="btn"><NavLink to='/login'>Login</NavLink></li>
            }
    </>
    return (
        <div>
            <div className="navbar h-40 bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                             {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl"><img src={navLogo} alt="" /></a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <Link><FaBagShopping size={25} /></Link>
                    <Link><FaSearch  size={25} /></Link>
                    <button className="btn btn-outline px-6 btn-accent">Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;