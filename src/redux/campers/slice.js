import { createSlice } from "@reduxjs/toolkit";
import { getCampers } from "./operations";
import { removeStringFromArray } from "../../utils/utils.js";

const initialState = {
  items: [],
  total: 0,
  page: 1,
  limit: 4,
  isLoading: false,
  isFavorite: [],
  error: null,
};
const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setFavorite(state, action) {
      state.isFavorite.push(action.payload);
    },
    unSetFavorite(state, action) {
      state.isFavorite = removeStringFromArray(
        state.isFavorite,
        action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getCampers.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.items = payload.items;
        state.total = payload.total;
      })
      .addCase(getCampers.pending, handlePending)
      .addCase(getCampers.rejected, handleRejected);
  },
});
export const { setPage } = campersSlice.actions;
export const { setFavorite } = campersSlice.actions;
export const { unSetFavorite } = campersSlice.actions;
export const campersReducer = campersSlice.reducer;
