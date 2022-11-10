import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    posts: [],
    isLoading: false,
    error: ''
}

export const getPosts = createAsyncThunk('posts/getPosts', async() => {
    return await axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then((response) => response.data)
       
})

// console.log("initialState", initialState);

const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.isLoading = true;
        },
        [getPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = '';
        },
        [getPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
})

export default postSlice.reducer;