import { createSlice } from '@reduxjs/toolkit'
import { getCamperInfoThunk, getPageAdvertsThunk } from './camperThunk'
import { handlerFulfilled, handlerPending, handlerRejected } from './halpers'

const initialState = {
    adverts: [],
    camperInfo: {},
    isLoading: false,
    isError: '',
    // totalResults: [],
    showMore: true
}

const camperSlice = createSlice({
    name: 'campers',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getPageAdvertsThunk.fulfilled, (state, { payload }) => {

                if (payload.length < 4) state.showMore = false
                else state.showMore = true

                payload.forEach(el => {
                    
                    if (state.adverts.findIndex(advert => el.id === advert.id) === -1) {
                        state.adverts.push(el)
                    }
                })
  
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
