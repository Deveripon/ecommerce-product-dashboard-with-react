import { createBrowserRouter } from "react-router-dom";
import privetRouter from "./PrivetRouter";
import publicRouter from "./PublicRouter";

const router = createBrowserRouter([privetRouter, publicRouter]);

export default router;
