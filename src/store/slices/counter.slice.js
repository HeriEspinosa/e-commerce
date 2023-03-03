import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CounterSlice = createSlice({
    name: 'counter',
    initialState: 1,
    reducers: {
        setCounter: (state, action) => action.payload
    }
})

export const {setCounter} = CounterSlice.actions

export default CounterSlice.reducer