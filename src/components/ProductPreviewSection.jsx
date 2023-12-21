const ProductPreviewSection = () => {
    return (
        <div className="product-preview">
            <div className="product-description-section border border-gray-200 p-5 rounded-md flex-1">
                <form action="">
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
                                readOnly={false}
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
                                disabled={false}>
                                <option value="">Select Category</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Clothings">Clothings</option>
                                <option value="Bags">Bags</option>
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
                                disabled={false}>
                                <option value="">Select Sub Category</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Clothings">Clothings</option>
                                <option value="Bags">Bags</option>
                            </select>
                        </div>
                        <div className="double-col">
                            <div className="input-group flex flex-col">
                                <label className="text-gray-600 text-[18px] my-2" htmlFor="r_price">
                                    Reguler Price
                                </label>
                                <input
                                    className="py-[12px] rounded-md text-gray-500 px-3 outline-none border bg-transparent border-gray-200"
                                    type="text"
                                    name="r_price"
                                    id="r_price"
                                    readOnly={true}
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
                                    readOnly={true}
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
                                readOnly={true}></textarea>
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
                                readOnly={true}
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-400 text-white px-5 py-2 rounded-sm hover:bg-blue-600 transform duration-150">
                            Update Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProductPreviewSection;
