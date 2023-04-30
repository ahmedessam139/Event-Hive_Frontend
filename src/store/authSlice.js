import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import authServices from "../utils/authServices";
// import localStorage from "local-storage";
//get data from local storage
// const user = localStorage.getItem("user")

const user =  null;

export const login = createAsyncThunk(
    "auth/login",
    async (data, thunkAPI) => {
        try {
            const response = await authServices.login(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const signup = createAsyncThunk(
    "auth/signup",
    async (data, thunkAPI) => {
        try {
            const response = await authServices.signup(data);
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
            const response = await authServices.logout(data);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: user ? JSON.parse(user) : null,
        isLoggedin: user ? true : false,
        error: null,
        loading: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isLoggedin = true;
        },
    },
    extraReducers: {
        [login.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [login.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = action.payload.user;
            state.isLoggedin = true;
            state.error = null;
        },
        [login.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [signup.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [signup.fulfilled]: (state, action) => {    
            state.loading = false;
            state.user = action.payload.user;
            state.isLoggedin = true;
            state.error = null;
        },
        [signup.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [logout.pending]: (state, action) => {
            state.loading = true;
            state.error = null;
        },
        [logout.fulfilled]: (state, action) => {
            state.loading = false;
            state.user = null;
            state.isLoggedin = false;
            state.error = null;
        },
        [logout.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

        

export const { setUser } = authSlice.actions;
export default authSlice.reducer;





