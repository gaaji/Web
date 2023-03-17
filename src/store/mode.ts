import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "./index";
import {MODE} from "../util/Constants";

export const modeSlice = createSlice({
    name: 'mode',
    initialState: MODE.HOME.eng,
    reducers: {
        SELECT: (state,action) => {
            return action.payload;
        },
    },
})
export const useModeSelector = () =>
    useSelector((state: RootState) => state.mode)
export const {SELECT} = modeSlice.actions;