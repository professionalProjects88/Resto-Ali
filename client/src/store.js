import { configureStore } from '@reduxjs/toolkit'
import getAll from "./actions/getAll"
import getOne from "./actions/getOne"
import signIn from "./actions/signIn"
import updateSlice from "./actions/updateOne"
export const store = configureStore({
  reducer: {
    getAll: getAll,
    getOne:getOne,
    signIn:signIn,
    updateSlice:updateSlice
  },
})