// import { configureStore } from '@reduxjs/toolkit'

// import postReducer from './Features/AllPost'

// export const store = configureStore({ reducer: postReducer })




import { configureStore } from '@reduxjs/toolkit';
import postReducer from './Features/AllPost';
import phoneNumberReducer from "./Features/PhoneNumberSignUp/PhoneNumberSignUp";
import OTPCodeReducer from "./Features/PhoneNumberSignUp/EnterOTPSignUpKit";
import CalanderReducer from "./Features/CalanderKit/CalanderKit";

export const store = configureStore({
    reducer: {
        post: postReducer,
        phoneNumber: phoneNumberReducer,
        OTPCodeStore: OTPCodeReducer,
        calander: CalanderReducer
    }
})