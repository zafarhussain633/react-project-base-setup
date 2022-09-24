import { configureStore } from '@reduxjs/toolkit'

import CounterReducer from "./counterSlice"
import userSlice from "./users"

export const store = configureStore({
  reducer: {
    counter:CounterReducer,
    users: userSlice,
  },
})