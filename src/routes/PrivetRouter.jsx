import ProductAdd from "../components/ProductAdd";
import ProductLIst from "../components/ProductLIst";
import Dashboard from "../pages/Dashboard";

const privetRouter = {
    path: "/",
    element: <Dashboard />,
    children: [
        {
            path: "/products",
            element: <ProductLIst />,
        },
        {
            path: "products/add-products",
            element: <ProductAdd />,
        },
    ],
};

export default privetRouter;
