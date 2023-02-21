import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "./index";
import {UsedItemPost} from "../model/usedItemPost";



export const pageNumSlice = createSlice({
    name: 'pageNum',
    initialState : 0,
    reducers: {
        PLUS: (state) => {
            return state + 1;
        },
        CLEAR: () => {
            return 0;
        }

    },
})
export const usePageNumSelector = () =>
    useSelector((state: RootState) => state.pageNum)
export const {PLUS,CLEAR } = pageNumSlice.actions;