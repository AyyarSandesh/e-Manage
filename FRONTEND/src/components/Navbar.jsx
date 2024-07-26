import React from 'react'

function Navbar() {
    const navItems=(
        <>
             <li><a href="/">Home</a></li>
            <li><a href="/EmployeeList">Employee List</a></li>
        </>
    );
  return (
    <>
    <div className="mx-w-screen-2x1 container mx-auto md:px-20 px-4">
    <div className="navbar bg-base-100">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">{navItems}</ul>
    </div>
    <a className="text-2xl font-bold cursor-pointer">e-Manage</a>
  </div>
  <div className="navbar-start hidden lg:flex">
    <ul className="menu menu-horizontal  px-1"><li><a href="/">Home</a></li></ul>
  </div>
  <div className="navbar-start hidden lg:flex hover:pointer-cursor">
    <ul className="menu menu-horizontal px-1"><li><a href="/EmployeeList">Employee List</a></li></ul>
  </div>
  <div className="navbar-end hidden lg:flex">
  <ul className="menu menu-horizontal">
    <li><a>User</a></li>
  </ul>
  </div>
  <div className="navbar-end">
    <a className="bg-black text-white p-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer">Logout</a>
  </div>
</div>
    </div>
    </>
  )
}

export default Navbar