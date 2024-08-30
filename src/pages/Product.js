import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../store/productSlice";
import { removeFromCart } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const productlist = useSelector((state) => state.products.productlist);
  const cart = useSelector((state) => state.products.cart);
  const product = productlist.find(p => p?.id === parseInt(id));
  return (
   <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-black ">Product List</h1>
      <div className="w-[100%] md:w-[80%]  h-[80vh] border border-black rounded-lg shadow-md  m-2 p-2 flex flex-col relative ">
        <img
          src={product?.image}
          className="w-[100%] h-[50%] object-contain"
        ></img>
        <div className=" text-left md:text-xl  text-md font-semibold   text-wrap ">
          {product?.title}{" "} <span className="inline px-3 py-1 rounded-xl  text-sm bg-yellow-300 text-yellow-700">{product?.category}</span>
        </div>
        <div className=" text-left">{product?.price} </div>
        <div className=" text-left h-[30%] text-wrap overflow-auto">{product?.description} </div>
        <div className="   mt-auto bg-transparent bottom-0 flex justify-between ">
         <NavLink to="/" className="bg-gray-950 text-white p-1 px-3 rounded-lg shadow-md">Back  </NavLink>
          <button
            className={` text-white px-3  py-1 rounded-lg shadow-md  ${
              cart.some(item => item.id === product?.id) ? "bg-red-600" : " bg-yellow-400"
            }  `}
            onClick={
              !cart.some(item => item.id === product?.id)
                ? () => dispatch(addToCart({ product: product }))
                : () => dispatch(removeFromCart({ product: product}))
            }
          >
            {  cart.some(item => item.id === product?.id) ? "Remove" : "Add"}
          </button>
        </div>
      </div>
      </div>

  );
};
export default Product;
