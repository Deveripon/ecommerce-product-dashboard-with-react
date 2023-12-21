import { Link } from "react-router-dom";
import AddForm from "./AddForm";

const ProductAdd = () => {
    return (
        <>
            <div className="product-section min-h-screen mb-5 rounded bg-gray-50 m-5">
                <div className="product-add-section p-8">
                    <div className="section-header pb-1 flex justify-between gap-5 ">
                        <h2 className="text-gray-500 font-semibold text-[25px]">Add Products</h2>
                        <Link
                            to="/products"
                            className="bg-blue-400 flex justify-center items-center text-white px-5 rounded-sm">
                            See All Product
                        </Link>
                    </div>
                    <AddForm />
                </div>
            </div>
        </>
    );
};

export default ProductAdd;
