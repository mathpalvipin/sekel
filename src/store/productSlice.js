import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState:{productlist:[] ,cart:[] ,total:0},
  reducers: {
     setProductList : function (state, action){
       state.productlist = action.payload.productlist;
     },
     setCartList : function (state, action){
     
      const cart = action.payload.cart;
      let  total=0;
      total = cart?.reduce((acc, cur)=> acc+parseInt(cur?.price), 0);
      state.total = total;
      state.cart= cart;
    },
     addToCart: function(state, action){
       const product = action.payload.product;
         const cart = [...state.cart];
         console.log(cart);
         const total = state.total;
         cart.push(product);
         state.cart= cart;
         state.total = total + parseInt(product?.price);
         console.log(cart);
         localStorage.setItem('cart', JSON.stringify(cart));
         
     },
     removeFromCart: function(state, action){
     const product =action.payload.product;
      
      const total = state.total;
      const cart = [...state.cart];
      const index= cart.findIndex(p=> p.id ===product.id  );
      cart.splice(index,1);
      console.log("after remove ", index , cart);
      state.cart= cart;
       state.total = total - parseInt(product?.price);
       console.log(cart);
       localStorage.setItem('cart', JSON.stringify(cart));
     

    }

  }
})

export const { setProductList ,addToCart ,removeFromCart ,setCartList } = productsSlice.actions
export default productsSlice.reducer