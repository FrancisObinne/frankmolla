import { configureStore } from "@reduxjs/toolkit";
// import any future reducers here (e.g., uiReducer)

export const store = configureStore({
  reducer: {
    // user: userReducer (will add later)
    // ui: uiReducer
  },
});

// Define RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
