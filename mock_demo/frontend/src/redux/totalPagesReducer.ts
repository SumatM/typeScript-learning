import { createSlice } from "@reduxjs/toolkit";

const totalPagesSlice = createSlice({
  name: "totalPages",
  initialState: { value: 0 as number },
  reducers: {
    setTotalPages: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default totalPagesSlice.reducer;
export const { setTotalPages } = totalPagesSlice.actions;
