import { configureStore } from "@reduxjs/toolkit";
import  userDetail  from "../features/userDetailSlics";


export const store=configureStore({
    reducer:{
        app:userDetail
    }
})