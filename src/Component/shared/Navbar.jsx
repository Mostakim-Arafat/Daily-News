'use client'

import Image from "next/image";
import users from '../../../public/user.png'
import Link from "next/link";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";


const Navbar = () => {
    const { data: session ,isPending} = authClient.useSession()
    const user = session?.user
    console.log(user)
    return (
        <div className="flex justify-between items-center mt-6">
            <div></div>
            <ul className="flex gap-2 ">
                <li><Navlink href={'/'} className='font-bold'>Home</Navlink></li>
                <li><Navlink href={'/about-us'}>About</Navlink></li>
                <li><Navlink href={'/career'}>Career</Navlink></li>
            </ul>


            { isPending ? <span className="loading loading-bars loading-lg"></span> :
                user ? <div className="flex justify-center items-center gap-2">
                    <h2>HI, {user.name}</h2>
                    <Image src={user.image || null} alt='logo' width={45} height={45} className="rounded-full"/>
                    <button className="btn" onClick={async() =>await authClient.signOut()}>Logout</button></div>
                    : <div className="flex justify-center items-center gap-2">
                        <Image src={users} alt="profile" />
                        <button className="btn"><Link href={'/login'}>Login</Link></button>
                    </div>
                         
            }



        </div>
    );
};

export default Navbar;