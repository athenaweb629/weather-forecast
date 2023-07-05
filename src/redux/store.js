import { configureStore } from "@reduxjs/toolkit";
import dashboardSlice from "./dashboard/dashboardSlice";
import forecastSlice from "./forecast/forecastSlice";
export default configureStore({
  reducer: {
    dashboard: dashboardSlice,
    forecast: forecastSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
