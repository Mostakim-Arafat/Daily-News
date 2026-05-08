import Image from "next/image";
import user from '../../../public/user.png'
import Link from "next/link";
import Navlink from "./Navlink";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center mt-6">
            <div></div>
             <ul className="flex gap-2 ">
                 <li><Navlink href={'/'} className='font-bold'>Home</Navlink></li>
                 <li><Navlink href={'/about-us'}>About</Navlink></li>
                 <li><Navlink href={'/career'}>Career</Navlink></li>
             </ul>
    
            <div className="flex justify-center items-center gap-2">
                <Image src={user} alt="profile"/>
                <button className="btn"><Link href={'/login'}>Login</Link></button>
            </div>  
           
        </div>
    );
};

export default Navbar;