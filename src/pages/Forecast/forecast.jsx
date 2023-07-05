import react, { Fragment, useEffect } from "react";
import {Typography } from "@mui/material";
import Title from "components/Title";
import { Card, Table } from "components/core";
import {get30daysWeather} from "redux/forecast/forecastSlice";
import { useDispatch, useSelector } from "react-redux";
const Forecast = () => {

    const dispatch = useDispatch();
    const { isLoading, dayWeather} = useSelector(state=>state.forecast)

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
    useEffect(()=>{
        dispatch(get30daysWeather(cityname))
    }, [])

    
    useEffect(()=>{
        console.log(dayWeather)
    }, [dayWeather])
  return (
    <Fragment>
      <Title title="Forecast" description="this is forecast page" />
      <Typography sx={{ mt: 2 }} gutterBottom variant="h4" component="h4">
        30 days forecast
      </Typography>

      <Card>
       {/* <Table /> */}
      </Card>
    </Fragment>
  );
};

export default Forecast;
