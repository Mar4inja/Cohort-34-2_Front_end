import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { uid } from "uid";

interface IAddBookPayload {
    title: string,
    author: string,
    year: string
}

const initialState = {
    books: [
        { ISBN: '1', title: 'Ascaban', author: 'J.K Rowling', year: '2007' }
    ]
};

export const librarySlice = createSlice({
    name: 'library',
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<IAddBookPayload>) => {
            state.books.push({
                ISBN: uid(),
                ...action.payload
            })
        },

        deleteBook: (state, action: PayloadAction<number>) => {
            state.books.splice(action.payload, 1);
        }

    }
})

export const {addBook, deleteBook} = librarySlice.actions;
export default librarySlice.reducer