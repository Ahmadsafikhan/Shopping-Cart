import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartSlice from './cartSlice';


// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });


const rootReducer = combineReducers({
    // ui: uiSlice.reducer,
    cart: cartSlice.reducer
  //   auth: authenticationSlice.reducer,
  });
  
  const store = configureStore({
    reducer: rootReducer,
  });
  export default store;