import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {
    AUTHENTICATE_TOWN,
    BASE_URL,
    CREATE_TOWN_TOKEN,
    DELETE_TOWN,
    ENROLL_TOWN,
    RETRIEVE_MY_TOWN,
    UPDATE_TOWN
} from "../util/Api";
import {MyTown, TownAddress, UpdateAddress} from "../model/town";
import {getCookie} from "../util/Cookie";
import {build} from "vite";
import {BaseQueryMeta} from "@reduxjs/toolkit/dist/query/baseQueryTypes";

export const townApi = createApi({
    reducerPath: 'townApi',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        }),
    tagTypes: ["MyTown", "TOKEN"],
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
        }),
        authenticateTown: builder.mutation<void,string>({
            query: (townId:string) => ({
                url: AUTHENTICATE_TOWN(townId),
                method : `PATCH`,
                headers : {
                    AUTHORIZATION: 'Bearer ' + getCookie("access_token")
                }
            }),
            invalidatesTags: () => [{type: "MyTown"}, {type:"TOKEN"}]
        }),
        getTownToken: builder.query<string,void>({
            query: () => ({
                url:CREATE_TOWN_TOKEN,
                method: `POST`,
                headers : {
                    AUTHORIZATION: 'Bearer ' + getCookie("access_token")
                },
                transform: (response:any)=>{
                    console.log(`res => ${response}`);
                    return response;
                }
            }),
            transformResponse: (response,meta,args) => {
                console.log(`res :: ${response}`)
                console.log(`meta :: ${JSON.stringify(meta)}`)
                console.log(`args :: ${args}`)
                // return response.headers.get(`X-TOWN-TOKEN`);
                return "";
            },
            // providesTags: () => {
            //     return [{type: "TOKEN"}]
            // }
        })
    }),
})

