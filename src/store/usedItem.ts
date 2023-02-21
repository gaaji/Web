import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "./index";
import {UsedItemPost} from "../model/usedItemPost";

const initialState: UsedItemPost[] = [];

export const usedItemSlice = createSlice({
    name: 'usedItem',
    initialState,
    reducers: {
        ADD: (state,action) => {
             Array.prototype.push.apply(state, action.payload);
             return state;
        },
        CLEAR: () => {
            return initialState;
        }

    },
})
export const useUsedItemSelector = () =>
    useSelector((state: RootState) => state.usedItem)
export const {ADD,CLEAR } = usedItemSlice.actions;