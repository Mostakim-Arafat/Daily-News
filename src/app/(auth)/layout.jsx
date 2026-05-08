import { geistMono } from '../layout';
import Navbar from '@/Component/shared/Navbar';

const Authlayout = ({children}) => {
    return (
        <div className={`${geistMono.className}`}>
            <Navbar></Navbar>
            {children}
            
        </div>
    );
};

export default Authlayout;