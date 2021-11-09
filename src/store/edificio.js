import { createReducer, createAsyncThunk } from "@reduxjs/toolkit";

export const setEdificio = createAsyncThunk("OBJETO", edificio => {
  return edificio;
});

const initialState = {};

const edifReducer = createReducer(initialState, {
  [setEdificio.fulfilled]: (state, action) => action.payload,
});

export default edifReducer;
