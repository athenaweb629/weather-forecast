import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "utils";
const initialState = {
  dayWeather: null,
  isLoading: false,
};

export const get30daysWeather = createAsyncThunk(
  "auth/get30daysWeather",
  async (arg, thunkAPI) => {
    try {
      const response = await Promise.all(
        arg.cityname.map(async (cn) => {
          const res = await http.get(
            `https://pro.openweathermap.org/data/2.5/forecast/climate?q=${cn}&appid=f95979a19d12ec4a0c5c731ed0d13bb4`
          );
          return res.list.map(a=>{
            return {
                "max": a.max,
                "min": a.min
            }
          });
        })
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const thirtyDaysSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(get30daysWeather.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(get30daysWeather.fulfilled, (state, action) => {
        console.log(action.payload);
        state.dayWeather = action.payload;
        state.isLoading = false;
      })
      .addCase(get30daysWeather.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default thirtyDaysSlice.reducer;
