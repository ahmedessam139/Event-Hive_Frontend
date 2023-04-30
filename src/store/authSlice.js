import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../utils/authService";
import Cookies from 'js-cookie';

const user = typeof window !== "undefined" && Cookies.get('token') ? JSON.parse(localStorage.getItem("user")) : null;


export const login = createAsyncThunk(
    "auth/login",
    async (data, thunkAPI) => {
        try {
            const userData = await authService.login(data);
            console.log(userData.username);
            return {user:userData};
        } catch (error) {
            console.log("fromSlice");
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);  

export const signup = createAsyncThunk(
    "auth/signup",
    async (data, thunkAPI) => {
        try {
            const response = await authService.signup(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const logout = createAsyncThunk(
    "auth/logout",
    async (data, thunkAPI) => {
        try {
            const response = await authService.logout(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);




const authSlice = createSlice({
    name: "auth",
    initialState: user
    ? { isLoggedIn: true, user }
    : { isLoggedIn: false, user: null },

    
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.isLoggedin = true;
            state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
            state.isLoggedin = false;
            state.user = null;
        },
        [signup.fulfilled]: (state, action) => {    
            state.isLoggedin = true;
            state.user = action.payload.user;
        },
        [signup.rejected]: (state, action) => {
            state.isLoggedin = false;
            state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.isLoggedin = false;
            state.user = null;
        },
        [logout.rejected]: (state, action) => {
            state.isLoggedin = true;
            state.user = action.payload.user;
        },
    },
});

        


export default authSlice.reducer;





