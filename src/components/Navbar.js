import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <nav className="bg-gray-900">
  <div className=" max-w-7xl sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="inset-y-0 left-0 flex items-center sm:hidden">
       
        <button type="button" className="inline-flex items-center justify-center rounded-md text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          
         
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="block h-16 lg:hidden w-auto" src="../images/logo.png" alt="Your Company"/>
          <img className="hidden h-16 w-auto lg:block" src="../images/logo.png" alt="Your Company"/>
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4 px-32">
            <NavLink to="/" className="bg-gray-900 text-white px-3 py-2 rounded-md  font-medium text-xl" aria-current="page">Explore</NavLink>

            <NavLink to="/games" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Games</NavLink>

            <NavLink to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Community</NavLink>

            <NavLink to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium">Contacts</NavLink>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span className="sr-only">View notifications</span>
        
        </button>
        <div className="relative ml-3">
          <div>
            <button type="button" className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            </button>
          </div>

          
         
        </div>
      </div>
    </div>
  </div>
  <div className="sm:hidden" id="mobile-menu">
    <div className="space-y-1 px-2 pt-2 pb-3">
      <a href="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Explore</a>

      <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Games</a>

      <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Community</a>

      <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar