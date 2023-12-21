import ImageUploader from "./ImageUploader";
import ProductInputFormElement from "./ProductInputFormElement";

const AddForm = () => {
    return (
        <form action="">
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
