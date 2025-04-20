import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import router from "./routes/routes";
import { CartProvider } from "./store/cart/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
