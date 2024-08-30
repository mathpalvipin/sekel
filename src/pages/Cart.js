
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { addToCart } from "../store/productSlice";
import { removeFromCart } from "../store/productSlice";
const Cart = ()=>{
    const cart = useSelector(state=> state.products.cart);
    const total = useSelector(state=> state.products.total);
    const dispatch = useDispatch();
    return (
        <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold text-black ">Cart  </h1>
      <div className="bg-yellow-300 w-auto h-10 p-2 rounded-lg  text-xl font-bold">Total - {total}</div>

      <div className="flex flex-wrap justify-center items-center  ">
        {cart?.map((p) =>{
        
        return (
            
          <div
            key={p?.id}
            className="w-44 h-64 border border-black rounded-lg shadow-md  m-3 p-2 flex flex-col relative  "
          >
            <img
              src={p?.image}
              className="w-[100%] h-[60%] object-contain"
            ></img>
            <div className=" text-left text-xl font-semibold text-nowrap  truncate">
              {p?.title}{" "}
            </div>
            <div className=" text-left">{p?.price} </div>
            <div className="flex flex-row justify-between  mt-auto">
              <NavLink
                to={`/product/${p?.id}`}
                className="bg-black text-white px-2 py-1 rounded-lg shadow-md"
              >
                Details
              </NavLink>
              <button
                className={` text-white px-3  py-1 rounded-lg shadow-md  ${ cart.some(item => item.id === p?.id)? "bg-red-600"  :" bg-yellow-400"}  `}
                onClick={
                  !cart.some(item => item.id === p?.id)
                    ? () => dispatch(addToCart({ product: p }))
                    : () => dispatch(removeFromCart({ product: p }))
                }
              >
                {  cart.some(item => item.id === p?.id) ? "Remove" : "Add"}
              </button>
            </div>
          </div>
        )})}
      </div>
    
    </div>)
}

export default Cart;