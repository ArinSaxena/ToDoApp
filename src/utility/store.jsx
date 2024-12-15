import taskSlice from "utility/taskSlice";
import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{
        task:taskSlice,
    }

})

export default store;