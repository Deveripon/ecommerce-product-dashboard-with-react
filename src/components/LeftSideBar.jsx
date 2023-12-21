import { Link } from "react-router-dom";

const LeftSideBar = () => {
    return (
        <div className="left-sidebar min-h-screen mb-5 bg-gray-50 w-1/5 p-6">
            <div className="branding">
                <div className="logo my-5">
                    <h2 className="text-[40px] text-green-600 font-extrabold">
                        Big <span className="text-orange-500">Bazar</span>
                    </h2>
                </div>
                <nav className="navigation">
                    <ul className="flex flex-col gap-4">
                        <li className="text-[20px] text-gray-600 hover:bg-gray-200 py-2 min-w-[140px] text-center rounded-md w-fit">
                            <Link to="/">Dashboard</Link>
                        </li>
                        <li className="text-[20px] text-gray-600 hover:bg-gray-200 py-2 min-w-[140px] text-center rounded-md w-fit">
                            <Link to="/orders">Orders</Link>
                        </li>
                        <li className="text-[20px] active-item  py-2 min-w-[140px] text-center rounded-md w-fit">
                            <Link to="/products">Products</Link>
                        </li>
                        <li className="text-[20px] text-gray-600 hover:bg-gray-200 py-2 min-w-[140px] text-center rounded-md w-fit">
                            <Link to="/customers">Customers</Link>
                        </li>
                        <li className="text-[20px] text-gray-600 hover:bg-gray-200 py-2 min-w-[140px] text-center rounded-md w-fit">
                            <Link to="/messages">Messages</Link>
                        </li>
                        <li className="text-[20px] text-gray-600 hover:bg-gray-200 py-2 min-w-[140px] text-center rounded-md w-fit">
                            <Link to="/settings">Settings</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default LeftSideBar;
