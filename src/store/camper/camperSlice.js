import { createSlice } from '@reduxjs/toolkit'
import { getCamperInfoThunk, getPageAdvertsThunk, getTotalAdvertsThunk } from './camperThunk'
import { handlerFulfilled, handlerPending, handlerRejected } from './halpers'

const initialState = {
    adverts: [],
    camperInfo: {},
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
                state.adverts = payload
            })
            .addCase(getCamperInfoThunk.fulfilled, (state, { payload }) => {
                state.camperInfo = payload
            })
            .addMatcher((action) => action.type.endsWith('/pending'), handlerPending)
            .addMatcher((action) => action.type.endsWith('/fulfilled'), handlerFulfilled)
            .addMatcher((action) => action.type.endsWith('/rejected'), handlerRejected)
    }
})

export const camperReducer = camperSlice.reducer
export const { getTotalAdverts, getPageAdverts, getCamperInfo } = camperSlice.actions
