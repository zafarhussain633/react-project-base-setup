import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import Services from "services"

export const getUsers = createAsyncThunk(
    "user/getUsers",
    async (params, thunkAPI) => {   // take two argument params is for passing params from where are dipatching,and thunk api can use for dipatch or some of its inbuilt feature
        try {
            const { data } = await Services.getUsers();
            return data
        } catch (err) {
            if (!err.response) {
                throw err
              }
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

export const addUser = createAsyncThunk(
    "user/addUser",
    async (params, thunkAPI) => {   // take two argument params is for passing params from where are dipatching,and thunk api can use for dipatch or some of its inbuilt feature
        try {
            const { data } = await Services.addUsers(params);
            return data
        } catch (err) {
            if (!err.response) {
                throw err
              }
            return thunkAPI.rejectWithValue(err.message)
        }
    }
)

const initialState = {
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: {

        // get users 
        [getUsers.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [getUsers.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.data = payload
            state.error = null
        },
        [getUsers.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload
        },

        //add user 
        [addUser.pending]: (state, { payload }) => {
            state.loading = true;
        },
        [addUser.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.error = null
        },
        [addUser.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload
        }
    }
})

// export const  {getUserData} = userSlice.actions
export default userSlice.reducer