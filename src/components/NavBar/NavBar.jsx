import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu , AiOutlineClose} from 'react-icons/ai';

const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' },
        { id: 6, path: '*', name: 'Abdul Hannan' },
      ];

    return (
        <nav className="bg-yellow-200 text-black p-6">
            <div className="md:hidden text-3xl" onClick={()=> setOpen(!open)}>
             {
                open === true ? <AiOutlineClose ></AiOutlineClose> : 
                <AiOutlineMenu></AiOutlineMenu>
             }
            
            </div>
      <ul className={`md:flex absolute md:static gap-10 bg-yellow-200  rounded-lg px-6 ${open ? 'top-20' : '-top-80'} duration-1000` }>
             
      {
        routes.map(route=> <Link key={route.id} route={route}></Link>)
      }

      </ul>

        </nav>
    );
};

export default NavBar;