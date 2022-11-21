import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { APIS, config } from "../../../API/Apis";

const initialState = {
    posts: '',
    isLoading: false,
    error: ''
}
// sms_number: "03164025665"
export const createPost = createAsyncThunk("enterPhoneNumber", async (values) => {
    // console.log("values123", values);
    return axios
        .post(`${APIS.PhoneNumberSignUp}`, { sms_number: values }, {
            headers: {
                'api_key': 'X5Ne0km7852Q1ykny9FfcIK5y9kVV5v6',
                'api_secret': 'Q1X5NeknkyV5v6Vkm78y9FfcI0K5y952',
            }
        })
        .then((response) => response.data)
})


const postSlice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [createPost.pending]: (state, action) => {
            state.isLoading = true;
        },
        [createPost.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.posts = action.payload;
            state.error = '';

            console.log("values321", action.payload);
        },
        [createPost.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.error.message;
        }
    }
})

export default postSlice.reducer;