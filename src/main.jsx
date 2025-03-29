import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ProductProvider from "./contexts/ProductContext.jsx";
import CartProvider, { CartContext } from "./contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <ProductProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ProductProvider>
  </CartProvider>
);
