import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";

const store = createStore(
    combineReducers({
        counter: counterReducer
    })
)

export default store;

// Типизация глобального состояния
export type RootState = ReturnType<typeof store.getState>;