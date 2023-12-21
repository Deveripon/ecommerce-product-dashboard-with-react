import ImageIcon from "../assets/images/image-.png";
import { MdOutlineDeleteOutline } from "react-icons/md";
const ImageUploader = () => {
    return (
        <div className="image-upload-section border rounded-md flex-1 p-5">
            <div className="image-uploader-input">
                <label htmlFor="image">
                    <div className="uploader-label w-[70%] h-[300px] m-auto flex justify-center items-center flex-col gap-5 rounded-xl border-dashed border-blue-500 border-2">
                        <div className="image flex justify-center items-center size-[60px]">
                            <img src={ImageIcon} alt="uploader icon" />
                        </div>
                        <p className="text-blue-500">Upload Your Product Image</p>
                    </div>
                </label>
                <input type="file" name="image" id="image" multiple hidden />
            </div>
            <div className="image-preview-section w-[70%] m-auto mt-5">
                <ul className="flex flex-col gap-1">
                    <li>
                        <div className="preview-item border  flex items-center justify-between rounded-md shadow-sm border-gray-200 p-3">
                            <div className="left flex gap-3 items-center">
                                <div className="image size-[40px] rounded-md">
                                    <img
                                        className="w-full rounded-md"
                                        src="https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=false"
                                        alt="preview-image"
                                    />
                                </div>
                                <div className="desc text-gray-500">
                                    <p>Loremipsumdolor.png</p>
                                    <p>450KB</p>
                                </div>
                            </div>
                            <div className="action">
                                <button>
                                    <MdOutlineDeleteOutline className="text-[25px] text-gray-500 hover:text-red-500 transform duration-100" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="preview-item border  flex items-center justify-between rounded-md shadow-sm border-gray-200 p-3">
                            <div className="left flex gap-3 items-center">
                                <div className="image size-[40px] rounded-md">
                                    <img
                                        className="w-full rounded-md"
                                        src="https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=false"
                                        alt="preview-image"
                                    />
                                </div>
                                <div className="desc text-gray-500">
                                    <p>Loremipsumdolor.png</p>
                                    <p>450KB</p>
                                </div>
                            </div>
                            <div className="action">
                                <button>
                                    <MdOutlineDeleteOutline className="text-[25px] text-gray-500 hover:text-red-500 transform duration-100" />
                                </button>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="preview-item border  flex items-center justify-between rounded-md shadow-sm border-gray-200 p-3">
                            <div className="left flex gap-3 items-center">
                                <div className="image size-[40px] rounded-md">
                                    <img
                                        className="w-full rounded-md"
                                        src="https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/r/e/m/-original-imagsfdvuffvqx4x.jpeg?q=90&crop=false"
                                        alt="preview-image"
                                    />
                                </div>
                                <div className="desc text-gray-500">
                                    <p>Loremipsumdolor.png</p>
                                    <p>450KB</p>
                                </div>
                            </div>
                            <div className="action">
                                <button>
                                    <MdOutlineDeleteOutline className="text-[25px] text-gray-500 hover:text-red-500 transform duration-100" />
                                </button>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ImageUploader;
