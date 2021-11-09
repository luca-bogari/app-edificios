import { configureStore } from "@reduxjs/toolkit";

import edifReducer from "./edificio";

export const store = configureStore({
  reducer: {
    edificio: edifReducer,
  },
});
