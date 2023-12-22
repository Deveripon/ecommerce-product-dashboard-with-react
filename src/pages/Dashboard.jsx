import Header from "../Header";
import LeftSideBar from "../components/LeftSideBar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ProductLIst from "../components/ProductLIst";
const Dashboard = () => {
    const location = useLocation();
    return (
        <>
            <section className="product-dashboard">
                <div className="section-wrapper flex justify-center ">
                    <LeftSideBar />
                    <div className="main-content w-4/5">
                        <Header />
                        {location.pathname === "/" ? <ProductLIst /> : <Outlet />}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;
