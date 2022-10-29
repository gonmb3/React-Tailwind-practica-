import {motion} from "framer-motion"

const Hero = () => {
    return (
        <div className=' bg-blue-900 py-16 w-full' id='inicio'>

            <div className="flex  px-20 items-center justify-between  gap-10">

                <div className="text-start flex flex-col gap-3  w-1/2">
                    <h2 className='text-3xl text-orange-600'>En oferta $500.00</h2>
                    <h4 className='text-white text-3xl font-bold'>Bienvenidos a Dev Z</h4>
                    <p className='text-gray-500'>Lorem ipsum, dolor sit amet tetur adipisicing elit. Ill tetur adipisicing elit. Illo facilis aut mao facilis aut maconsectetur adipisicing elit. Illo facilis aut magni. Nobis voluptatibus inventore officiis autem tenetur optio dicta?</p>

                    <div className='my-2'>
                     <motion.button 
                        whileTap={{scale:1.2}}
                         className='bg-orange-600 text-white px-4 py-2 rounded-md hover:bg-transparent border duration-200 border-orange-600'>
                            Tomar Curso
                    </motion.button>
                    </div>

                </div>

                <div className="w-1/2 ">
                    <img className='w-full  h-80 object-cover' src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="img" />
                </div>
            </div>

        </div>
    )
}

export default Hero