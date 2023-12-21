import Header from "../Header";
import LeftSideBar from "../components/LeftSideBar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <section className="product-dashboard">
                <div className="section-wrapper flex justify-center ">
                    <LeftSideBar />
                    <div className="main-content w-4/5">
                        <Header />
                        <Outlet />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
