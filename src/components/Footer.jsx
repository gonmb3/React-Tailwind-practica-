import {FaFacebook, FaInstagram} from "react-icons/fa"


const Footer = () => {
  return (
   <>
        <footer className='bg-blue-600 py-12'>
          <div className="container mx-auto px-2 text-white">
                <div className="flex justify-between">
                        <div className="">
                            <h2 className='text-3xl font-bold mb-4'>Explorar</h2>
                            <div className="icons flex">
                                <a className="px-1" href="#"><FaFacebook  size={26}/></a>
                                <a className="px-1" href="#"><FaInstagram size={26}/></a>
                            </div>
                        </div>

                        <div className="">
                            <h2 className='text-3xl font-bold mb-4'>Aprende más</h2>
                            <ul className='ml-5'>
                                <li><a href="#">Inicio</a> </li>
                                <li><a href="#">Cursos</a> </li>
                                <li><a href="#">Opiniones</a> </li>
                                <li><a href="#">Sobre Nosotros</a> </li>
                         
                            </ul>
                        </div>

                        <div className="">
                            <h2 className='text-3xl font-bold mb-4'>DevTamin</h2>
                            <p>® Dev Z Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                </div>
        </div>
        </footer>
   </>
  )
}

export default Footer