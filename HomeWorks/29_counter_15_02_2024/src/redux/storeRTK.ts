import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice/counterSlice";



export const storeRTK = configureStore ({
    reducer: {
        counter: counterSlice
    }
})


// Типизация глобального состояния
export type RootState = ReturnType<typeof storeRTK.getState>;