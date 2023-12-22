import { MdDeleteSweep } from "react-icons/md";
const Product = ({ name, photo, category, r_price, s_price, key }) => {
    return (
        <div
            key={key}
            className="product transform duration-300 hover:scale-[1.01] p-4 rounded-md border border-gray-300 bg-slate-100 shadow-sm flex justify-center items-center">
            <div className="product-img  flex-1 mx-3 text-center border-r border-gray-300  min-h-[100px] flex justify-center items-center flex-col ">
                <div className="img-box size-[90px]">
                    <img className=" rounded-md" src={`${photo}`} alt="product-image" />
                </div>
            </div>
            <div className="product-name mx-3 text-center border-r min-h-[100px] flex justify-center items-center flex-col border-gray-300 flex-1">
                <h2 className="text-gray-800">Product Name</h2>
                <h2 className="text-gray-600">{name}</h2>
            </div>
            <div className="product-category mx-3 text-center border-r min-h-[100px] flex justify-center items-center flex-col border-gray-300 flex-1">
                <h2 className="text-gray-800">Product Category</h2>
                <h2 className="text-gray-600">{category}</h2>
            </div>
            <div className="product-reguler-price mx-3 text-center border-r min-h-[100px] flex justify-center items-center flex-col border-gray-300 flex-1">
                <h2 className="text-gray-800">Reguler Price</h2>
                <del className="text-gray-600">${r_price}</del>
            </div>
            <div className="product-sale-price mx-3 text-center border-r min-h-[100px] flex justify-center items-center flex-col border-gray-300 flex-1">
                <h2 className="text-gray-800">Sale Price</h2>
                <p className="text-gray-600">${s_price}</p>
            </div>
            <div className="action mx-3 text-center border-r min-h-[100px] flex justify-center items-center flex-col border-gray-300 flex-1">
                <h2 className="text-gray-800 ">Actions</h2>
                <div className="button-group flex justify-center items-center gap-5">
                    <button className="text-gray-500 px-5 text-[30px] flex justify-center items-center hover:text-red-500 py-2">
                        <MdDeleteSweep />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Product;
