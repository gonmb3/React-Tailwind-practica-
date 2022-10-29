import { motion } from "framer-motion"

const Courses = () => {
    return (
        <div className='px-20 py-7 courses-container' id="cursos">
            <h2 className='text-3xl font-light'>Ultimos Cursos</h2>


        <div className="cards-container flex gap-10">

                    <motion.div whileHover={{ scale: 1.02 }} className="card w-1/3 mt-4 shadow-lg rounded-lg cursor-pointer duration-200">

                        <img className='w-full' src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

                        <div className="card-info px-4 py-6">
                            <h6 className='font-bold text-2xl mb-2 '>Lorem ipsum dolor sit amet contur.</h6>

                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                lla repellat exercitationem distinctio t
                                emporibus magni ullam nesciunt? Similique suscipi
                                t quisquam quaerat incidunt, laborum ut quia sequi voluptas.
                            </p>
                            <div className='my-2'>
                                <button
                                    className='bg-orange-600 text-white px-4 hover:text-black py-2 rounded-md hover:bg-transparent border duration-200 border-orange-600'>
                                    Tomar Curso
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    
       
                    <motion.div whileHover={{ scale: 1.02 }} className="card w-1/3 mt-4 shadow-lg rounded-lg cursor-pointer">

                        <img className='w-full' src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

                        <div className="card-info px-4 py-6">
                            <h6 className='font-bold text-2xl mb-2 '>Lorem ipsum dolor sit amet contur.</h6>

                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                lla repellat exercitationem distinctio t
                                emporibus magni ullam nesciunt? Similique suscipi
                                t quisquam quaerat incidunt, laborum ut quia sequi voluptas.
                            </p>
                            <div className='my-2'>
                                <button
                                    className='bg-orange-600 text-white px-4 hover:text-black py-2 rounded-md hover:bg-transparent border duration-200 border-orange-600'>
                                    Tomar Curso
                                </button>
                            </div>
                        </div>
                    </motion.div>

                    
       
                    <motion.div whileHover={{ scale: 1.02 }} className="card w-1/3 mt-4 shadow-lg rounded-lg cursor-pointer">

                        <img className='w-full' src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" />

                        <div className="card-info px-4 py-6">
                            <h6 className='font-bold text-2xl mb-2 '>Lorem ipsum dolor sit amet contur.</h6>

                            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                lla repellat exercitationem distinctio t
                                emporibus magni ullam nesciunt? Similique suscipi
                                t quisquam quaerat incidunt, laborum ut quia sequi voluptas.
                            </p>
                            <div className='my-2'>
                                <button
                                    className='bg-orange-600 text-white px-4 hover:text-black py-2 rounded-md hover:bg-transparent border duration-200 border-orange-600'>
                                    Tomar Curso
                                </button>
                            </div>
                        </div>
                    </motion.div>
         

                


        </div>




        </div>
    )
}

export default Courses