import { useContext } from "react";
import ImageUploader from "./ImageUploader";
import ProductInputFormElement from "./ProductInputFormElement";
import ProductAddContext from "../context/ProductAddContext";
import { toast } from "react-toastify";
import axios from "axios";

const AddForm = () => {
    const { inputValues, setInputValues } = useContext(ProductAddContext);
    const handleFormSubmit = (e) => {
        e.preventDefault();
        //add form validation
        if (!inputValues.name) return toast.error("Product name is required");
        if (!inputValues.category) return toast.error("Please select a category");
        if (!inputValues.subcategory) return toast.error("Please select a Subcategory");
        if (!inputValues.s_price) return toast.error("Sale Price Must be specified");
        if (!inputValues.desc) return toast.error("Provide a Description of this Product");
        if (!inputValues.photo) return toast.error("Please give a photo url for this time");
        //send data to database by API
        axios
            .post("http://localhost:7000/products", inputValues)
            .then((res) => {
                toast.success("Product created successfully");
                setInputValues({
                    name: "",
                    category: "",
                    subcategory: "",
                    r_price: null,
                    s_price: null,
                    desc: null,
                    photo: null,
                });
            })
            .catch((err) => {
                toast.error({ message: err.message });
            });
        //give success message
    };
    return (
        <form onSubmit={handleFormSubmit} action="">
            <div className="wrapper product-add-form flex gap-4">
                <ImageUploader />
                <ProductInputFormElement />
            </div>
            <button
                className="bg-blue-400 rounded-md hover:bg-blue-500 transform duration-100 text-white py-2 mt-5 px-6"
                type="submit">
                Create Now
            </button>
        </form>
    );
};

export default AddForm;
