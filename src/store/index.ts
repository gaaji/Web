import {configureStore} from "@reduxjs/toolkit";
import {modeSlice} from "./mode";

export const store = configureStore({
    reducer: {
        mode : modeSlice.reducer

    },
})

export type RootState = ReturnType<typeof store.getState>
