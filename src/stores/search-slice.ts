import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

type SliceState = {
  query: string;
};

const initialState: SliceState = {
  query: "",
};

const slice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    updateQuery(state, { payload }: PayloadAction<{ query: string }>) {
      const { query } = payload;
      state.query = query;
    },
  },
});

export const { updateQuery } = slice.actions;

export default slice.reducer;

export const searchQuery = (state: RootState) =>
  state.searchSlice?.query;
