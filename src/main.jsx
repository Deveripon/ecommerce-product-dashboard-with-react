import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ProductAddContextProvider from "./providers/ProductAddContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <ProductAddContextProvider>
        <App />
    </ProductAddContextProvider>
);
