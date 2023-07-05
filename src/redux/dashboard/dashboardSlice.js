import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "utils";
const initialState = {
  dayWeather: null,
  isLoading: false,
};

export const getCurrentWeather = createAsyncThunk(
  "auth/getCurrentWeather",
  async (arg, thunkAPI) => {
    try {
      const response = await Promise.all(
        arg.cityname.map(async (cn) => {
          const a = await http.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cn}&appid=f95979a19d12ec4a0c5c731ed0d13bb4`
          );
          return {
            location: a.data.name,
            temp: a.data.main.temp,
            hightemp:a.data.main.temp_max,
            lowtemp: a.data.main.temp_min,
            icon: a.data.weather[0].icon,
            forecast: a.data.weather[0].description,
            chance: null,
            warnings: null,
            humidity: a.data.main.humidity,
          };
        })
      );
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCurrentWeather.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCurrentWeather.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log(action.payload)
        state.dayWeather = action.payload;
        state.isLoading = false;
      })
      .addCase(getCurrentWeather.rejected, (state, action) => {
        console.log(action.payload);
      });
  },
});

export default dashboardSlice.reducer;
