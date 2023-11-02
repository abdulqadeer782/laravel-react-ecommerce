import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLogin: false,
    },
    reducers: {
        getLogin: (state) => {
            state.isLogin = true
        },
        getLogout: (state) => {
            state.isLogin = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { getLogin, getLogout } = authSlice.actions

export default authSlice.reducer
