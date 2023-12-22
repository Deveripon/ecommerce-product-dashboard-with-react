import { Link } from "react-router-dom";
import Product from "./Product";
import ProductPreviewSection from "./ProductPreviewSection";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductLIst = () => {
    const [productList, setProductList] = useState([]);
    const getAllProduct = async () => {
        try {
            const response = await axios.get("http://localhost:7000/products");
            setProductList(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <>
            <div className="product-add-section min-h-screen mb-5 rounded bg-gray-50 m-5">
                <div className="product-wrapper p-5">
                    <div className="section-header pb-1 flex justify-between  gap-5 ">
                        <h3 className="text-gray-500 font-semibold text-[25px]">All Products</h3>
                        <div className="button-group flex gap-4">
                            <Link
                                to="/products/add-products"
                                className="bg-blue-400 flex justify-center items-center text-white px-5 rounded-sm">
                                Add new Product
                            </Link>
                            <button className="bg-blue-400 text-white px-5 rounded-sm">
                                Edit this product ?
                            </button>
                        </div>
                    </div>
                    <div className="section-wrapper flex  gap-3">
                        <div className="left-side w-[60%]">
                            <div className="product-list border border-gray-300 p-5 rounded-md h-[838px] border-dashed overflow-y-scroll overflow-hidden  flex flex-col gap-3 m-auto">
                                {productList.reverse().map((item, index) => {
                                    return (
                                        <Product
                                            key={index}
                                            name={item.name}
                                            category={item.category}
                                            r_price={item.r_price}
                                            s_price={item.s_price}
                                            photo={item.photo}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="right-side w-[40%]">
                            <ProductPreviewSection />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductLIst;
