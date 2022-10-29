import { AiFillStar } from "react-icons/ai"

const Feedback = () => {
    return (
        <div className='bg-orange-600 py-11 text-white' id="opiniones">
            <div className="container mx-auto py-2">
                <h2 className='text-3xl font-bold mb-5 text-center'>Opiniones de Estudiantes</h2>
                <p className='px-24 text-center'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Animi voluptatibus consequatur commodi repellendus in se
                    d? Ullam ducimus, necessitatibus doloribus ipsum eveniet perferendis
                    optio repellendus vel sunt quos quasi? Nostrum!
                </p>


            <div className="flex gap-6 my-14" >
                    <div className=" w-1/3 text-center">
                        <div className="img flex justify-center mb-5">
                            <img className=" rounded-full w-[150px] h-[150px] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                        </div>
                        <h5 className="font-bold text-1xl my-2 text-black">Pepe Sand</h5>
                        <p className="text-1xl text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Omnis magnam explicabo asperiores nobis quaerat!
                        </p>
                        <div className="stars flex justify-center mt-3 space-x-2">
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                        </div>
                    </div>

                    <div className=" w-1/3 text-center">
                        <div className="img flex justify-center mb-5">
                            <img className=" rounded-full w-[150px] h-[150px] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                        </div>
                        <h5 className="font-bold text-1xl my-2 text-black">Pepe Sand</h5>
                        <p className="text-1xl text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Omnis magnam explicabo asperiores nobis quaerat!
                        </p>
                        <div className="stars flex justify-center mt-3 space-x-2">
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                        </div>
                    </div>


                    <div className=" w-1/3 text-center">
                        <div className="img flex justify-center mb-5">
                            <img className=" rounded-full w-[150px] h-[150px] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                        </div>
                        <h5 className="font-bold text-1xl my-2 text-black">Pepe Sand</h5>
                        <p className="text-1xl text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Omnis magnam explicabo asperiores nobis quaerat!
                        </p>
                        <div className="stars flex justify-center mt-3 space-x-2">
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                            <AiFillStar color="yellow" size={19} />
                        </div>
                    </div>

                
                </div>


            </div>
        </div>
    )
}

export default Feedback