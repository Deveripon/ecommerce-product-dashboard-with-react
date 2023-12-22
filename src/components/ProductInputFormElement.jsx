import axios from "axios";
import { useContext, useEffect, useState } from "react";
import ProductAddContext from "../context/ProductAddContext";

const ProductInputFormElement = () => {
    //get categories from database
    const [categories, setCategories] = useState([]);
    const getCategories = async () => {
        const response = await axios.get("http://localhost:7000/category");
        setCategories(response.data);
    };
    //get subcategories from database
    const [subcategories, setSubCategories] = useState([]);
    const getSubCategories = async () => {
        const response = await axios.get("http://localhost:7000/subcategory");
        setSubCategories(response.data);
    };
    //run API request only when component did mount successfully
    useEffect(() => {
        getCategories();
        getSubCategories();
    }, []);

    //manage form data by state and context
    const { inputValues, setInputValues } = useContext(ProductAddContext);
    const handleInputValues = (e) => {
        setInputValues((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="product-description-section border border-gray-200 p-5 rounded-md flex-1">
            <div className="product-description-input w-[calc(100%_-_70px)] m-auto">
                <div className="input-group mb-2 flex flex-col">
                    <label className="text-gray-600 text-[18px] my-2" htmlFor="name">
                        Product name
                    </label>
                    <input
                        className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                        type="text"
                        name="name"
                        id="name"
                        value={inputValues.name}
                        onChange={handleInputValues}
                    />
                </div>
                <div className="input-group mb-2 flex flex-col">
                    <label className="text-gray-600 text-[18px] my-2" htmlFor="category">
                        Category
                    </label>
                    <select
                        className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                        name="category"
                        id="category"
                        onChange={handleInputValues}>
                        <option value="">Select Category</option>
                        {categories.map((item, index) => {
                            return (
                                <option
                                    key={index}
                                    selected={inputValues.category === item.name ? true : false}
                                    value={`${item.name}`}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="input-group mb-2 flex flex-col">
                    <label className="text-gray-600 text-[18px] my-2" htmlFor="subcategory">
                        Sub Category
                    </label>
                    <select
                        className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                        name="subcategory"
                        id="subcategory"
                        onChange={handleInputValues}>
                        <option value="">Select Sub Category</option>
                        {subcategories.map((item, index) => {
                            return (
                                <option
                                    key={index}
                                    value={`${item.name}`}
                                    selected={inputValues.subcategory === item.name ? true : false}>
                                    {item.name}
                                </option>
                            );
                        })}
                    </select>
                </div>
                <div className="double-col mb-2 flex justify-between gap-2">
                    <div className="input-group flex flex-col">
                        <label className="text-gray-600 text-[18px] my-2" htmlFor="r_price">
                            Reguler Price
                        </label>
                        <input
                            className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                            type="text"
                            name="r_price"
                            id="r_price"
                            value={inputValues.r_price}
                            onChange={handleInputValues}
                        />
                    </div>
                    <div className="input-group flex flex-col">
                        <label className="text-gray-600 text-[18px] my-2" htmlFor="s_price">
                            Sale Price
                        </label>
                        <input
                            className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                            type="text"
                            name="s_price"
                            id="s_price"
                            value={inputValues.s_price}
                            onChange={handleInputValues}
                        />
                    </div>
                </div>
                <div className="input-group mb-2 flex flex-col">
                    <label className="text-gray-600 text-[18px] my-2" htmlFor="desc">
                        Description
                    </label>
                    <textarea
                        className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                        name="desc"
                        id="desc"
                        cols="30"
                        rows="4"
                        onChange={handleInputValues}>
                        {inputValues.desc}
                    </textarea>
                </div>
                <div className="input-group mb-2 flex flex-col">
                    <label className="text-gray-600 text-[18px] my-2" htmlFor="name">
                        Product Photo Url
                    </label>
                    <input
                        className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                        type="text"
                        name="photo"
                        id="photo"
                        value={inputValues.photo}
                        onChange={handleInputValues}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductInputFormElement;
