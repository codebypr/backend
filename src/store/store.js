import { configureStore } from "@reduxjs/toolkit";
import datareducer from './dataSlice'

const store=configureStore({
        reducer:datareducer
})

export default store