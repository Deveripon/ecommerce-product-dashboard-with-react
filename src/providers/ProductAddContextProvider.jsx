import { useState } from "react";
import ProductAddContext from "../context/ProductAddContext";

const ProductAddContextProvider = ({ children }) => {
    const [inputValues, setInputValues] = useState({
        name: "",
        category: "",
        subcategory: "",
        r_price: undefined,
        s_price: undefined,
        desc: "",
        photo: "",
    });
    return (
        <>
            <ProductAddContext.Provider value={{ inputValues, setInputValues }}>
                {children}
            </ProductAddContext.Provider>
        </>
    );
};

export default ProductAddContextProvider;
