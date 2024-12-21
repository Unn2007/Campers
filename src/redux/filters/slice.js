import { createSlice } from "@reduxjs/toolkit";

const serchQuerySlice = createSlice({
  name: "filters",
  initialState: {status:{
    location: "",
    ac: false,
    bathroom: false,
    kitchen: false,
    tv: false,
    radio: false,
    refrigerator: false,
    microwave: false,
    gas: false,
    water: false,

    vehicleType: "",
  }},
  reducers: {
    setFilters(state, action) {
       
      state.status = {...action.payload};
    },
  },
});

export const { setFilters } = serchQuerySlice.actions;
export const filtersReducer = serchQuerySlice.reducer;
