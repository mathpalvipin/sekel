import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full fixed top-0 h-12 bg-blue-800  z-20 flex justify-end items-center text-right ">
   <NavLink
        to="/"
        className={({ isActive }) =>
          `font-semibold text-2xl p-2  m-2 ${
            isActive ? "border-b-2 border-black text-black" : "text-gray-200"
          } `
        }
      >
        Home{" "}
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) =>
          `font-semibold text-2xl p-2  m-2 ${
            isActive ? "border-b-2 border-black text-black" : "text-gray-200"
          } `
        }
      >
        Cart{" "}
      </NavLink>
      
    </div>
  );
};

export default NavBar;
