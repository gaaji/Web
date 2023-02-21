import {configureStore} from "@reduxjs/toolkit";
import {modeSlice} from "./mode";
import {townApi} from "../api/townApi";
import {townTokenSlice} from "./towntoken";
import {usedItemApi} from "../api/usedItemApi";
import {usedItemSlice} from "./usedItem";

export const store = configureStore({
    reducer: {
        mode : modeSlice.reducer,
        townToken: townTokenSlice.reducer,
        usedItem: usedItemSlice.reducer,
        [townApi.reducerPath]: townApi.reducer,
        [usedItemApi.reducerPath]: usedItemApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(townApi.middleware)
        .concat(usedItemApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
