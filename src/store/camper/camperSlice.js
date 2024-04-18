import { createSlice } from '@reduxjs/toolkit'
import { getPageAdvertsThunk, getTotalAdvertsThunk } from './camperThunk'
import { handlerFulfilled, handlerPending, handlerRejected } from './halpers'

const initialState = {
    adverts: [],
    isLoading: false,
    isError: '',
    totalResults: [],
    showMore: true
}

const camperSlice = createSlice({
    name: 'campers',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getTotalAdvertsThunk.fulfilled, (state, { payload }) => {
                state.totalResults = payload
            })
            .addCase(getPageAdvertsThunk.fulfilled, (state, { payload }) => {
                console.log('state', state)
                state.adverts = [...payload]
            })
            .addMatcher((action) => action.type.endsWith('/pending'), handlerPending)
            .addMatcher((action) => action.type.endsWith('/fulfilled'), handlerFulfilled)
            .addMatcher((action) => action.type.endsWith('/rejected'), handlerRejected)
    }
})

export const camperReducer = camperSlice.reducer
export const { getTotalAdverts } = camperSlice.actions
