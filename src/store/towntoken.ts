import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "./index";

export const townTokenSlice = createSlice({
    name: 'townToken',
    initialState: "",
    reducers: {
        SET: (state,action) => {
            return action.payload;
        },
        CLEAR : () => {
            return "";
        }
    },
})
export const useTownTokenSelector = () =>
    useSelector((state: RootState) => state.townToken)
export const {SET,CLEAR } = townTokenSlice.actions;