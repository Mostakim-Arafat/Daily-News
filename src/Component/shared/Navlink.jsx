'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({href,children,className}) => {
    const path = usePathname()
    const isactive = href === path
    return (
        <div>
            <Link href={href} className={ `${isactive ? 'border-b-2 border-green-400' : ''} ${className} `}>{children}</Link>
             
        </div>
    );
};

export default Navlink;