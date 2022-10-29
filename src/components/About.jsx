import React from 'react'

const About = () => {
  return (
    <div className='py-16' id='nosotros'>
        <div className="container mx-auto py-2 flex justify-center gap-7 items-center">

        <div className="w-1/2 text-center">
          <h3 className='font-bold text-2xl '>Sobre Nosotros</h3>
          <p className='text-1xl py-5'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod soluta,
            illum unde, a dolorum asperiores venilias enim at dolorum asperiores veniam aspernatur aliquam n
            on cum praesentiu dolorum asperiores venim odio, similique incidunt.
          </p>
      </div>

        <div className="w-1/2 relative">
              <img className='w-full relative z-10' src="https://images.unsplash.com/photo-1589652717521-10c0d092dea9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />

        <div className="bg-orange-600 w-full h-full absolute top-6 right-6"></div>
          </div>

        </div>
    </div>
  )
}

export default About