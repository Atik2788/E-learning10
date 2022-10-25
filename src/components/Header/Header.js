import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mt-0 bg-orange-200'>
           <div className="navbar bg-base-500">
            
                <div className=" navbar">
                <Link to='/' className="btn btn-ghost normal-case text-5xl font-bold">E-Larn</Link>
                    <div className="dropdown sm:ml-28">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-1 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='text-xl font-bold' to='/'>Home</Link></li>
                        <li><Link className='text-xl font-bold' to='/about'>About</Link></li>
                        <li><Link className='text-xl font-bold' to='/blog'>Blog</Link></li>
                        <li><Link className='text-xl font-bold' to='/faq'>FAQ</Link></li>
                        <li><Link className='text-xl font-bold' to='/login'>Login</Link></li>
                        <li tabIndex={0}>
                            <a className="justify-between text-xl font-bold">
                                Mode
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><Link>Dark</Link></li>
                                <li><Link>Light</Link></li>
                            </ul>
                        </li>

                        
                    </ul>
                    </div>
                </div>
                
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                    <li><Link className='text-xl font-bold' to='/'>Home</Link></li>
                        <li><Link className='text-xl font-bold' to='/about'>About</Link></li>
                        <li><Link className='text-xl font-bold' to='/blog'>Blog</Link></li>
                        <li><Link className='text-xl font-bold' to='/faq'>FAQ</Link></li>
                        <li><Link className='text-xl font-bold' to='/login'>Login</Link></li>
                        <li tabIndex={0}>
                            <a className="justify-between text-xl font-bold">
                                Mode
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                            </a>
                            <ul className="p-2">
                                <li><Link>Dark</Link></li>
                                <li><Link>Light</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
              
                </div>
        </div>
    );
};

export default Header;