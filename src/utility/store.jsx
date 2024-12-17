import taskSlice from "utility/taskSlice";
import filterSlice from "utility/filterSlice";

import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer:{

        task:taskSlice,
        filter:filterSlice,
    }

})

export default store;