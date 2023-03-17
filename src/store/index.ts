import {configureStore} from "@reduxjs/toolkit";
import {modeSlice} from "./mode";
import {townApi} from "../api/townApi";
import {townTokenSlice} from "./towntoken";
import {usedItemApi} from "../api/usedItemApi";
import {usedItemSlice} from "./usedItem";
import {pageNumSlice} from "./pageNum";
import {nowSlice} from "./now";

export const store = configureStore({
    reducer: {
        mode : modeSlice.reducer,
        townToken: townTokenSlice.reducer,
        usedItem: usedItemSlice.reducer,
        pageNum: pageNumSlice.reducer,
        now: nowSlice.reducer,
        [townApi.reducerPath]: townApi.reducer,
        [usedItemApi.reducerPath]: usedItemApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(townApi.middleware)
        .concat(usedItemApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
