import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorite: []
    },
    
    reducers: {
        toggleFavorite: (state, { payload }) => {

            const index = state.favorite.findIndex(element => element.id === payload.id); // -1, not found
    
            if (index === -1) {
                state.favorite.push(payload)
            } else {
                state.favorite.splice(index, 1)
            }

        }
    }
})

export const favoriteReducer = favoriteSlice.reducer
export const { toggleFavorite } = favoriteSlice.actions