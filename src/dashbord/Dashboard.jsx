import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import SiderBar from "./components/SiderBar";
// import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.css"
import Contante from "./components/Contante";
const Dashboard = () => {
    const navigate = useNavigate();

useEffect(() => {
        const checkUser = () => {
            if (!localStorage.getItem("authorization")) {
                navigate("/login");
            }
        };
        //  checkUser();
    }, [navigate]);

    const handleSignOut = () => {
        localStorage.removeItem("authorization");
        navigate("/");
    };

    return (
        <main className='' style={{height:"100vh"}}>
            
            <Contante/>
            {/* <h2 style={{ marginBottom: "30px" }}>Youssef, Bakkali</h2> */}
            {/* <button className='signOutBtn' onClick={handleSignOut}>
                SIGN OUT
            </button> */}
            
        </main>
    );
};

export default Dashboard;
