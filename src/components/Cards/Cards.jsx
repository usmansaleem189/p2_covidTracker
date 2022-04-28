import React from 'react';
import styles from './Cards.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CountUp from 'react-countup';
import cx from "classnames";



export default function Cards({globalStats:{confirmed,recovered, deaths, lastUpdate }}) {

  
  //console.log (globalStats.confirmed);

 if (!confirmed)
   return (
       <div>loading...</div>
     )

  return (
    <div className = {styles.cardsContainer}>
    <Card className = {cx(styles.card, styles.confirmed)}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Infected
        </Typography>
        <Typography variant="h5" component="div">
          <CountUp end={confirmed} duration={2} separator=','/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {lastUpdate}
        </Typography>
        <Typography variant = "body2">
          Number of active cases of COVID-19
        </Typography>
      </CardContent>
    </Card>
    <Card className = {cx(styles.card, styles.recovered)}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Recovered
        </Typography>
        <Typography variant="h5" component="div">
        <CountUp end={recovered} duration={2} separator=','/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {lastUpdate}
        </Typography>
        <Typography variant="body2">
          Number of recoveries from COVID-19
        </Typography>
      </CardContent>
    </Card>
    <Card className = {cx(styles.card, styles.deaths)}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Deaths
        </Typography>
        <Typography variant="h5" component="div">
        <CountUp end={deaths} duration={2} separator=','/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {lastUpdate}
        </Typography>
        <Typography variant="body2">
          Number of deaths caused by COVID-19
        </Typography>
      </CardContent>
    </Card>
        </div>
  );
}
