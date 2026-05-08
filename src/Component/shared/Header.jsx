
import NewsLogo from '../../../public/logo.png'
import Image from 'next/image';
import { format } from "date-fns";



const Header = () => {
    return (
        <div className='text-center p-10'>
            <Image src={NewsLogo} alt='news logo' className='mx-auto'></Image>
             <p>Journalism Without Fear or Favour</p>
             <p>{format(new Date(), " EEEE , MMM dd ,yyyy")}</p>
        </div>
    );
};

export default Header;