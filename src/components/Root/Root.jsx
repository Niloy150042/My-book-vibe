import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
    const location = useLocation()
    console.log(location.pathname);
    return (

        <div className="w-full md:w-full lg:w-[1270px] mx-auto ">

            <Navbar></Navbar>
            <Outlet></Outlet>
            {
                location.pathname.startsWith("/books/")
                    ? null
                    : <Footer />
            }
        </div>
    );
};

export default Root;