import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Title from "components/Title";
import { Card, Table } from "components/core";
import { getCurrentWeather } from "redux/dashboard/dashboardSlice";
import { AtomSpinner } from "react-epic-spinners";
import TempCell from "./tempCell";
import { Box, Typography } from "@mui/material";
function Overview() {
  const dispatch = useDispatch();
  const { dayWeather, isLoading } = useSelector((state) => state.dashboard);

  const [tableBody, setTableBody] = React.useState([]);
  const [tableHead] = React.useState([
    { id: "location", label: "Location", align: "center" },
    { id: "temp", label: "Temp", align: "center" },
    {
      id: "high",
      label: "High",
      align: "center",
    },
    {
      id: "low",
      label: "Low",
      align: "center",
    },
    {
      id: "sky",
      label: "Sky",
      align: "center",
    },
    {
      id: "forecast",
      label: "Forecast",
      align: "center",
    },
    {
      id: "chance",
      label: "Chance",
      align: "center",
    },
    {
      id: "warning",
      label: "Warning",
      align: "center",
    },
    {
      id: "humidity",
      label: "Humidity",
      align: "center",
    },
  ]);
  const cityname = [
    "Bandon, us",
    "Bend, us",
    "Cameron Park, us",
    "Fort Collins, us",
    "Grants Pass, us",
    "Littleton, us",
    "Madras, us",
    "Medford, us",
    "Redmond, us",
    "Roseburg, us",
    "Sacramento, us",
    "Terrebonne, us",
  ];
  useEffect(() => {
    dispatch(getCurrentWeather({ cityname: cityname }));
      //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (dayWeather) {
      const convertedData = dayWeather.map((row) => {
        const temp = <TempCell temp={row.temp} />;
        const high = <TempCell temp={row.hightemp} />;
        const low = <TempCell temp={row.lowtemp} />;

        const iconData = {
          "01": (
            <img
              style={{ height: "35px" }}
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/clear-day.svg"
              alt="clear-day"
              loading="lazy"
            />
          ),
          "02": (
            <img
              style={{ height: "35px" }}
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day.svg"
              alt="partly-cloudy-day"
              loading="lazy"
            />
          ),
          "03": (
            <img
              style={{ height: "35px" }}
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/cloudy.svg"
              alt="cloudy"
              loading="lazy"
            />
          ),
          "04": (
            <img
              style={{ height: "35px" }}
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast.svg"
              alt="overcast"
              loading="lazy"
            />
          ),
          "09": (
            <img
              style={{ height: "35px" }}
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-rain.svg"
              alt="overcast-rain"
              loading="lazy"
            />
          ),
          10: (
            <img
              style={{ height: "35px" }}
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/partly-cloudy-day-rain.svg"
              alt="partly-cloudy-day-rain"
              loading="lazy"
            />
          ),
          11: (
            <img
              style={{ height: "35px" }}
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/thunderstorms-overcast.svg"
              alt="thunderstorms-overcast"
              loading="lazy"
            />
          ),
          13: (
            <img
              style={{ height: "35px" }}
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/overcast-snow.svg"
              alt="overcast-snow"
              loading="lazy"
            />
          ),
          50: (
            <img
              style={{ height: "35px" }}
              src="https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/fog.svg"
              alt="fog"
              loading="lazy"
            />
          ),
        };

        return [
          row.location,
          temp,
          high,
          low,
          iconData[row.icon.slice(0, -1)],
          row.forecast,
          null,
          null,
          row.humidity + "%",
        ];
      });
      setTableBody(convertedData);
    }
    //eslint-disable-next-line
  }, [dayWeather]);

  return (
    <Fragment>
      <Title title="Overview" description="this is overview page" />
      <Typography sx={{ mt: 2 }} gutterBottom variant="h4" component="h4">
        Overview
      </Typography>
      <Card>
        {isLoading ? (
          <Box style={{height: "100%", width: "100%", display: "flex", justifyContent: "center", alignItems: "center"}}>
            
            <AtomSpinner color="rgb(7, 250, 108)" />
            Loading...
          </Box>
        ) : (
          <Table THeadData={tableHead} TBodyData={tableBody}></Table>
        )}
      </Card>
    </Fragment>
  );
}

export default Overview;
