export const handlerPending = state => {
    state.isLoading = true
    state.isError = ''
    state.showMore = false
}

export const handlerRejected = (state, { payload }) => {
    console.log('payload', payload)
    state.isLoading = false
    state.showMore = false
    state.isError = payload.error
}

export const handlerFulfilled = state => {
    state.isLoading = false
    state.showMore = true
}