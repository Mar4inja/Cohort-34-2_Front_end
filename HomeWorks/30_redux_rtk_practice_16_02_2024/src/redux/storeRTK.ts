import { configureStore } from '@reduxjs/toolkit';

import sandwichReducer  from "./sandwich/sandwichSlice";
import counterReducer  from "./counter/counterSlice";
import libraryReducer from './library/librarySlice';



export const storeRTK = configureStore({
    reducer: {
      sandwich: sandwichReducer,
      counter: counterReducer,
      library: libraryReducer
    }
})

export type RootState = ReturnType<typeof storeRTK.getState>;