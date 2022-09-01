import react from "react";
import Navbar from "../Navbar/Navbar";

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
                {children}
            <footer>This is the footer</footer>
        </>
    );
};

export default Layout;