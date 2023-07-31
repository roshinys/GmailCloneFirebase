import { configureStore } from "@reduxjs/toolkit";
import mailSlice from "./mailSlice";

const store = configureStore({
  reducer: {
    main: mailSlice.reducer,
  },
});

export default store;
