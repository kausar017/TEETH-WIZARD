import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Modal from "../pagase/modal/modal";

const MainLayOut = () => {
    return (
        <div>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Outlet */}
            <div className="min-h-[calc(100vh-320px)]">
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;