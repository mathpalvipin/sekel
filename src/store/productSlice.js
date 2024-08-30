import { createSlice } from '@reduxjs/toolkit'

const productsSlice = createSlice({
  name: 'products',
  initialState:{productlist:[] ,cart:[] ,total:0},
  reducers: {
     setProductList : function (state, action){
       state.productlist = action.payload.productlist;
     },
     setCartList : function (state, action){
      console.log("from local storage" ,action.payload.cart);
      const cart = action.payload.cart;
      const productlist = state.productlist;
      const total = cart?.reduce((acc, cur)=> acc+productlist[cur-1]?.price, 0);
      console.log(total);
      state.total = total;
      state.cart= cart;
    },
     addToCart: function(state, action){
      console.log("adding to cart")
         const cart = [...state.cart];
         const total = state.total;
         const id = action.payload.id
         cart.push(id);
         state.cart= cart;
         state.total = total + state.productlist[id]?.price;
         localStorage.setItem('cart', JSON.stringify(cart));
         
     },
     removeFromCart: function(state, action){
     const id =action.payload.id;
      console.log("removing ", id)
      const total = state.total;
      const cart = [...state.cart];
      const index= cart.indexOf(id);
      cart.splice( index,1);
       state.cart= cart;
       state.total = total - state.productlist[id]?.price;
       localStorage.setItem('cart', JSON.stringify(cart));
     

    }

  }
})

export const { setProductList ,addToCart ,removeFromCart ,setCartList } = productsSlice.actions
export default productsSlice.reducer