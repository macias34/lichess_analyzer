import { createSlice } from "@reduxjs/toolkit";

export const gameFormatSlice = createSlice({
  name: "gameFormat",
  initialState: { value: { gameFormat: "bullet" } },
  reducers: {
    changeGameFormat: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeGameFormat } = gameFormatSlice.actions;

export default gameFormatSlice.reducer;
