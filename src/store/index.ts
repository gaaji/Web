import {configureStore} from "@reduxjs/toolkit";
import {modeSlice} from "./mode";
import {townApi} from "../api/townApi";
import {townTokenSlice} from "./towntoken";

export const store = configureStore({
    reducer: {
        mode : modeSlice.reducer,
        townToken: townTokenSlice.reducer,
        [townApi.reducerPath]: townApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(townApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
