import {createSlice} from "@reduxjs/toolkit";
import {useSelector} from "react-redux";
import {RootState} from "./index";
import {currentTime} from "../util/CurrentTime";

export const nowSlice = createSlice({
    name: 'now',
    initialState:currentTime(),
    reducers: {
        REFRESH: () => {
            return currentTime();
        }
    },
})
export const useNowSelector = () =>
    useSelector((state: RootState) => state.now)
export const {REFRESH } = nowSlice.actions;