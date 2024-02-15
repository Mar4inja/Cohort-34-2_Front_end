import { configureStore } from '@reduxjs/toolkit';

import sandwichSlice  from "./sandwitch/sandwitchSlice";

export const storeRTK = configureStore({
    reducer: {
      sandwich: sandwichSlice
    }
})

export type RootState = ReturnType<typeof storeRTK.getState>;