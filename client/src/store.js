import { configureStore } from '@reduxjs/toolkit'
import getAll from "./actions/getAll"
export const store = configureStore({
  reducer: {
    getAll: getAll
  },
})