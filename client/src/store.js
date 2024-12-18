import { configureStore } from '@reduxjs/toolkit'
import getAll from "./actions/getAll"
import getOne from "./actions/getOne"
export const store = configureStore({
  reducer: {
    getAll: getAll,
    getOne:getOne
  },
})