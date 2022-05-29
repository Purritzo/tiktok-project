import { configureStore } from '@reduxjs/toolkit'
import hangmanReducer from './features/hangman/hangmanSlice.js'

const store = configureStore({
    reducer: hangmanReducer
    }
)

export default store