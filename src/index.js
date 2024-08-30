import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store.js";
import { Provider } from "react-redux";
import Home from "./pages/Home.js";
import Product from "./pages/Product.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./pages/Cart.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <Home></Home> },
      { path: "/product/:id", element: <Product></Product> },
      { path: "/cart", element: <Cart></Cart> },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
  
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
