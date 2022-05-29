import { createSlice } from '@reduxjs/toolkit'

export const hangmanSlice = createSlice({
    name: 'hangman',
    initialState: {
        stage : 1, 
        word : '', 
        guesses : 6, 
        value : '', 
        word_display : [],
        guessed : [],
        invalid_word : false
    },
    reducers: {
      save_word: (state, action) => {
        if ((/^[a-zA-Z]+$/.test(action.payload)) && (action.payload.length > 0)){
          state.word = action.payload.toUpperCase();
          state.stage = 2;
          state.word_display = Array(action.payload.length).fill('_ ')
        }
        else {
          state.invalid_word = true
        }
      },
      add_guess: (state, action) => {
        state.guessed.push(action.payload)
      },
      wrongguess: (state) => {
        state.guesses -= 1
      },
      updatedisplay: (state) => {
        state.word_display = state.word.split('').map(letter => (state.guessed.includes(letter) ? letter : "_ "))
      },
      reset: (state) => {
        state.stage = 1;
        state.word = '';
        state.guesses = 6;
        state.value = '';
        state.word_display = [];
        state.guessed = [];
        state.invalid_word = false;

      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { save_word, add_guess, wrongguess, updatedisplay, reset } = hangmanSlice.actions
  
  export default hangmanSlice.reducer