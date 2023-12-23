import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { toast } from "react-toastify";

const ProductLIst = () => {
    //get all products
    const [productList, setProductList] = useState([]);
    const getAllProduct = async () => {
        try {
            const response = await axios.get("http://localhost:7000/products");
            setProductList(response.data.reverse());
        } catch (error) {
            console.log(error);
        }
    };

    //get clicked item for edit
    const [clickedItemInput, setClickedItemInput] = useState({});
    const [isEdit, setIsEdit] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const getClickedItem = (id) => {
        const clickedItem = productList.find((item) => item.id === id);
        setClickedItemInput(clickedItem);
        if (clickedItem) {
            setIsEdit(true);
        }
    };
    //make form editable
    const makeEditable = () => {
        setIsEditable((prevState) => !prevState);
    };
    //edit product form data
    const editSelectedProduct = (e) => {
        setClickedItemInput((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };
    //get category list from api
    const [categoryList, setCategoryList] = useState([]);
    const getCategoryList = async () => {
        try {
            const response = await axios.get("http://localhost:7000/category");
            setCategoryList(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    //get subcategory list from api
    const [subcategoryList, setSubCategoryList] = useState([]);
    const getSubCategoryList = async () => {
        try {
            const response = await axios.get("http://localhost:7000/subcategory");
            setSubCategoryList(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    //upadte product data
    const upadateProductData = (e) => {
        e.preventDefault();
        axios
            .patch("http://localhost:7000/products/" + clickedItemInput.id, clickedItemInput)
            .then(() => {
                setClickedItemInput({
                    name: "",
                    category: "",
                    subcategory: "",
                    r_price: undefined,
                    s_price: undefined,
                    desc: "",
                    photo: "",
                });
                getAllProduct();
                toast.success("Product updated successfully");
            })
            .catch((err) => {
                console.log(err);
            });
    };
    //delete single product
    const deleteSingleProduct = (id) => {
        setIsEdit(false);
        axios
            .delete("http://localhost:7000/products/" + id)
            .then((res) => {
                toast.success("Product deleted successfully");
                getAllProduct();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //stop re sender
    useEffect(() => {
        getAllProduct();
        getCategoryList();
        getSubCategoryList();
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
                                className="bg-blue-400 hover:bg-blue-600 transform duration-150 flex justify-center items-center text-white px-5 rounded-sm">
                                Add new Product
                            </Link>
                            {isEdit ? (
                                <button
                                    onClick={makeEditable}
                                    className="bg-blue-400 hover:bg-blue-600 transform duration-150 text-white px-5 rounded-sm">
                                    {isEditable ? " Cancel" : " Edit Product ?"}
                                </button>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                    <div className="section-wrapper flex  overflow-x-hidden gap-3">
                        <div className="left-side w-full">
                            <div className="product-list border border-gray-300 p-5 rounded-md  border-dashed overflow-y-scroll overflow-hidden  flex flex-col gap-3 m-auto">
                                {productList.length > 0 ? (
                                    productList.map((item, index) => {
                                        return (
                                            <div className="product transform duration-300 hover:scale-[1.01] rounded-md border border-gray-300  bg-slate-100 flex justify-between items-center">
                                                <div
                                                    onClick={() => {
                                                        getClickedItem(item.id);
                                                    }}
                                                    key={index}
                                                    className="product transform duration-300 hover:scale-[1.01] p-4 rounded-md bg-slate-100  flex flex-1 justify-between items-center">
                                                    <div className="product-img  flex-1 mx-3 text-center border-r border-gray-300  min-h-[100px] flex justify-center items-center flex-col ">
                                                        <div className="img-box size-[90px]">
                                                            <img
                                                                className=" rounded-md"
                                                                src={`${item.photo}`}
                                                                alt="product-image"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="product-name mx-3 text-center border-r min-h-[100px] flex justify-center items-center flex-col border-gray-300 flex-1">
                                                        <h2 className="text-gray-800">
                                                            Product Name
                                                        </h2>
                                                        <h2 className="text-gray-600">
                                                            {item.name}
                                                        </h2>
                                                    </div>
                                                    <div className="product-category mx-3 text-center border-r min-h-[100px] flex justify-center items-center flex-col border-gray-300 flex-1">
                                                        <h2 className="text-gray-800">
                                                            Product Category
                                                        </h2>
                                                        <h2 className="text-gray-600">
                                                            {item.category}
                                                        </h2>
                                                    </div>
                                                    <div className="product-reguler-price mx-3 text-center border-r min-h-[100px] flex justify-center items-center flex-col border-gray-300 flex-1">
                                                        <h2 className="text-gray-800">
                                                            Reguler Price
                                                        </h2>
                                                        <del className="text-gray-600">
                                                            ${item.r_price}
                                                        </del>
                                                    </div>
                                                    <div className="product-sale-price mx-3 text-center border-r min-h-[100px] flex justify-center items-center flex-col border-gray-300 flex-1">
                                                        <h2 className="text-gray-800">
                                                            Sale Price
                                                        </h2>
                                                        <p className="text-gray-600">
                                                            ${item.s_price}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="action mx-3 text-center  min-h-[100px] flex justify-center items-center flex-col  ">
                                                    <h2 className="text-gray-800 ">Actions</h2>
                                                    <div className="button-group flex justify-center items-center gap-5">
                                                        <button
                                                            onClick={() => {
                                                                deleteSingleProduct(item.id);
                                                            }}
                                                            className="text-gray-500 px-5 text-[30px] flex justify-center items-center hover:text-red-500 py-2">
                                                            <MdDeleteSweep />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                ) : (
                                    <div className="no-products min-h-[400px] flex justify-center items-center">
                                        <h3 className="text-red-600 text-[20px]">
                                            No Products Found
                                        </h3>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div
                            className={`right-side ${
                                isEdit ? "w-[50%]" : "w-0"
                            } transform duration-700`}>
                            <div className="product-preview">
                                <div className="product-description-section border border-gray-200 p-5 rounded-md flex-1">
                                    <form onSubmit={upadateProductData} action="">
                                        <div className="product-description-input w-[calc(100%_-_70px)] m-auto">
                                            <div className="input-group mb-2 flex flex-col">
                                                <label
                                                    className="text-gray-600 text-[18px] my-2"
                                                    htmlFor="name">
                                                    Photo Preview
                                                </label>
                                                <div className="preview-img-box h-[50%] w-[50%]">
                                                    <img
                                                        className="rounded-md"
                                                        src={`${
                                                            clickedItemInput.photo
                                                                ? clickedItemInput.photo
                                                                : "https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg"
                                                        }`}
                                                        alt="photo-preview"
                                                    />
                                                </div>
                                            </div>
                                            <div className="input-group mb-2 flex flex-col">
                                                <label
                                                    className="text-gray-600 text-[18px] my-2"
                                                    htmlFor="name">
                                                    Product name
                                                </label>
                                                <input
                                                    className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    onChange={editSelectedProduct}
                                                    readOnly={isEditable ? false : true}
                                                    value={clickedItemInput.name}
                                                />
                                            </div>
                                            <div className="input-group mb-2 flex flex-col">
                                                <label
                                                    className="text-gray-600 text-[18px] my-2"
                                                    htmlFor="category">
                                                    Category
                                                </label>
                                                <select
                                                    className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                                                    name="category"
                                                    id="category"
                                                    disabled={isEditable ? false : true}
                                                    onChange={editSelectedProduct}>
                                                    <option value="">Select Category</option>
                                                    {categoryList.map((item, index) => {
                                                        return (
                                                            <option
                                                                key={index}
                                                                selected={
                                                                    clickedItemInput.category ===
                                                                    item.name
                                                                }
                                                                value={`${item.name}`}>
                                                                {item.name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                            <div className="input-group mb-2 flex flex-col">
                                                <label
                                                    className="text-gray-600 text-[18px] my-2"
                                                    htmlFor="subcategory">
                                                    Sub Category
                                                </label>
                                                <select
                                                    className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                                                    name="subcategory"
                                                    id="subcategory"
                                                    disabled={isEditable ? false : true}
                                                    onChange={editSelectedProduct}>
                                                    <option value="">Select Sub Category</option>
                                                    {subcategoryList.map((item, index) => {
                                                        return (
                                                            <option
                                                                key={index}
                                                                selected={
                                                                    clickedItemInput.subcategory ===
                                                                    item.name
                                                                }
                                                                value={`${item.name}`}>
                                                                {item.name}
                                                            </option>
                                                        );
                                                    })}
                                                </select>
                                            </div>
                                            <div className="double-col">
                                                <div className="input-group flex flex-col">
                                                    <label
                                                        className="text-gray-600 text-[18px] my-2"
                                                        htmlFor="r_price">
                                                        Reguler Price
                                                    </label>
                                                    <input
                                                        className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                                                        type="text"
                                                        name="r_price"
                                                        id="r_price"
                                                        readOnly={isEditable ? false : true}
                                                        onChange={editSelectedProduct}
                                                        value={clickedItemInput.r_price}
                                                    />
                                                </div>
                                                <div className="input-group flex flex-col">
                                                    <label
                                                        className="text-gray-600 text-[18px] my-2"
                                                        htmlFor="s_price">
                                                        Sale Price
                                                    </label>
                                                    <input
                                                        className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                                                        type="text"
                                                        name="s_price"
                                                        id="s_price"
                                                        onChange={editSelectedProduct}
                                                        readOnly={isEditable ? false : true}
                                                        value={clickedItemInput.s_price}
                                                    />
                                                </div>
                                            </div>
                                            <div className="input-group mb-2 flex flex-col">
                                                <label
                                                    className="text-gray-600 text-[18px] my-2"
                                                    htmlFor="desc">
                                                    Description
                                                </label>
                                                <textarea
                                                    className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                                                    name="desc"
                                                    id="desc"
                                                    cols="30"
                                                    rows="4"
                                                    onChange={editSelectedProduct}
                                                    value={clickedItemInput.desc}
                                                    readOnly={isEditable ? false : true}></textarea>
                                            </div>
                                            <div className="input-group mb-2 flex flex-col">
                                                <label
                                                    className="text-gray-600 text-[18px] my-2"
                                                    htmlFor="name">
                                                    Product Photo Url
                                                </label>
                                                <input
                                                    className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                                                    type="text"
                                                    name="photo"
                                                    id="photo"
                                                    onChange={editSelectedProduct}
                                                    readOnly={isEditable ? false : true}
                                                    value={clickedItemInput.photo}
                                                />
                                            </div>
                                            {isEditable ? (
                                                <button
                                                    type="submit"
                                                    className="bg-blue-400 text-white px-5 py-2 rounded-sm hover:bg-blue-600 transform duration-150">
                                                    Update Now
                                                </button>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductLIst;
