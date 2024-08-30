
import { useEffect } from 'react';
import './App.css';
import { setProductList ,setCartList } from './store/productSlice';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  const dispatch = useDispatch();
  const cart = JSON.parse(localStorage.getItem('cart'));

  const fetchData =async  ()=>{
     const data = await  (await fetch ('https://fakestoreapi.com/products')).json();
    
    dispatch( setProductList({productlist:data}));
     if(cart){
       dispatch(setCartList({cart:cart}));
     }
  
    }

    useEffect(()=>{
     fetchData();
    },[])
  return (
    <div className="App">
      <NavBar></NavBar>
      <div className="z-10  m-2 mt-[3rem]  p-2 "><Outlet></Outlet></div>
    </div>
  );
}

export default App;
