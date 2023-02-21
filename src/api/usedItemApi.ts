import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL, USED_ITEM_POST_LIST} from "../util/Api";
import {getCookie} from "../util/Cookie";
import {UsedItemPost, UsedItemPostListArgs} from "../model/usedItemPost";

export const usedItemApi = createApi({
    reducerPath: 'usedItemApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: (headers, { getState, endpoint, type, forced }) => {
            headers.set("Authorization", 'Bearer ' + getCookie("access_token"));

            const townToken = getCookie("X-TOWN-TOKEN");
            if(townToken)
                headers.set("X-TOWN-TOKEN", townToken);
            return headers
        }
    }),
    tagTypes:["list"],
    endpoints: (builder) => ({
        getUsedItem: builder.query<UsedItemPost[],UsedItemPostListArgs>({
            query: (UsedItemPostListArgs) => ({
                url: USED_ITEM_POST_LIST,
                method : `GET`,
                params: {pageNum : UsedItemPostListArgs.pageNum,
                requestTime : UsedItemPostListArgs.requestTime}
            }),
            providesTags:[{type:"list"}]
        })

        })
    })


