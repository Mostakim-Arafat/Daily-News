
import Header from "@/Component/shared/Header";
import Navbar from "@/Component/shared/Navbar";
import Breaking from "@/Component/shared/Breaking";

const Mainlayout = ({children}) => {
    return (
        <div className="w-10/12 mx-auto">
            <Header></Header>
            <Breaking></Breaking>
            <Navbar></Navbar>
            {children}
            
        </div>
    );
};

export default Mainlayout;