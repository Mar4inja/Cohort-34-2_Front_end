import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CounterState {
    counterValue: number;
}

const initialState: CounterState = {
    counterValue: 0
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter: (state, action: PayloadAction<number>) => {
            state.counterValue = action.payload;
        },
        increment: (state, action: PayloadAction<number>) => {
            state.counterValue += action.payload;
        },
        decrement: (state, action: PayloadAction<number>) => {
            state.counterValue -= action.payload;
        },
        reset: (state) => {
            state.counterValue = 0;
        },
        incrementByTen: (state) => {
            state.counterValue += 10;
        },
        decrementByTen: (state) => {
            state.counterValue -= 10;
        }
    }
});

export const { setCounter, increment, decrement, reset, incrementByTen, decrementByTen } = counterSlice.actions;

export default counterSlice.reducer;
