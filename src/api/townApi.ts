import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {BASE_URL, DELETE_TOWN, ENROLL_TOWN, RETRIEVE_MY_TOWN, UPDATE_TOWN} from "../util/Api";
import {MyTown, TownAddress, UpdateAddress} from "../model/town";
import {getCookie} from "../util/Cookie";

export const townApi = createApi({
    reducerPath: 'townApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        }),
    tagTypes: ["MyTown"],
    endpoints: (builder) => ({
        getMyTown: builder.query<MyTown[], void>({
            query: () => ({
                url: RETRIEVE_MY_TOWN,
                method: 'GET',
                headers : {
                    AUTHORIZATION: 'Bearer ' + getCookie("access_token")
                }
            })
            ,
            providesTags: () => {
                return [{type: "MyTown"}]
            }
        }),
        enrollTown: builder.mutation<void, TownAddress>({
            query: ({address1, address2}) => ({
                url:ENROLL_TOWN,
                method: 'POST',
                body: {address1, address2},
                headers : {
                    AUTHORIZATION: 'Bearer ' + getCookie("access_token")
                }
            }),
            invalidatesTags: () => [{type: "MyTown"}]
        }),
        deleteTown: builder.mutation<void,string>({
            query: (townId:string) => ({
                url:DELETE_TOWN(townId),
                method: 'DELETE',
                headers : {
                    AUTHORIZATION: 'Bearer ' + getCookie("access_token")
                }
            }),
            invalidatesTags: () => [{type: "MyTown"}]
        }),
        updateTown: builder.mutation<void,UpdateAddress>({
            query: ({originalTownId, address1, address2}) => ({
                url:UPDATE_TOWN,
                method: 'PATCH',
                body:{
                    originalTownId,
                    address1,
                    address2
                },
                headers : {
                    AUTHORIZATION: 'Bearer ' + getCookie("access_token")
                }
            }),
            invalidatesTags: () => [{type: "MyTown"}]
        })
    }),
})

