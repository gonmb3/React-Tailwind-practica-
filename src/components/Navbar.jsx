import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-700 flex justify-between px-20 items-center h-16 w-full fixed'> 
        <div className="">
            <h1 className=" text-3xl uppercase font-bold text-white"><span className='text-black'>D</span>ev Z</h1>
        </div>

        <div className="">
            <ul className='flex space-x-4'>
                <li className='hover:text-gray-800 text-white'><a href="#inicio">Inico</a></li>
                <li className='hover:text-gray-800 text-white'><a href="#cursos">Cursos</a></li>
                <li className='hover:text-gray-800 text-white'><a href="#opiniones">Opiniones</a></li>
                <li className='hover:text-gray-800 text-white'><a href="#nosotros">Nosotros</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar