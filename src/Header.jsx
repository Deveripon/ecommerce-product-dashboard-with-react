import { CiSearch } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa6";
const Header = () => {
    return (
        <div className="header  m-5 rounded flex  justify-between  ">
            <div className="search-bar h-[60px] px-5  w-2/5 flex items-center rounded-md bg-gray-50">
                <button>
                    <CiSearch />
                </button>
                <input
                    className="bg-transparent px-5 text-[16px] w-full outline-none text-gray-600"
                    type="search"
                    name="search"
                    id="search"
                    placeholder="search"
                />
            </div>
            <div className="user-profile flex items-center gap-3 px-5 rounded  bg-gray-50">
                <div className="user-image h-[50px] w-[50px] ">
                    <img
                        className="w-full"
                        src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_640.png"
                        alt="user-image"
                    />
                </div>
                <div className="user-info text-gray-600">
                    <div className="name">
                        <p>Shahadat Hussain Ripon</p>
                    </div>
                    <div className="title">
                        <p className="text-[14px]">Admin</p>
                    </div>
                </div>
                <FaAngleDown className="text-gray-500" />
            </div>
        </div>
    );
};

export default Header;
