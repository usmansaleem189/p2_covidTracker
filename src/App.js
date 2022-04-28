import React, { useEffect, useState } from 'react';
import './App.css';
import Cards from './components/Cards/Cards';
import CountryPicker from './components/CountryPicker/CountryPicker';
import Graph from './components/Graph/Graph';
import image from './image/image.jpg';

import { FetchTotalStats, FetchDailyData, fetchContinentData, fetchCountriesName, 
                        fetchCountryData, fetchDailyCountryData} from './api';

function App() {
 
  const [globalStats,setGlobalStats] = useState({});
  const [dailyStats,setDailyStats] = useState({});
  const [continentData, setContinentData] = useState([]);
  const [countriesName, setCountriesNames] = useState([]);


  useEffect(()=> {
    const fetchData = async () => {
      const totalStats = await FetchTotalStats();
      setGlobalStats(totalStats);
      //console.log(totalStats);
      //console.log(globalStats);
    }
    const fetchDailyStats = async () => {
        const dailyDataStats = await FetchDailyData();
        setDailyStats(dailyDataStats);
        //console.log(dailyDataStats);
        //console.log(dailyStats);
    }
    const getContinentData = async () => {
      const continentsData = await fetchContinentData();
      setContinentData (continentsData);
    }
    const getCountriesName = async () => {
      const countriesList = await fetchCountriesName();
      setCountriesNames (countriesList);
    }




    fetchData();
    fetchDailyStats();
    getContinentData();
    getCountriesName();

  },[])

  const handleCountryPicker = async (country) => {
    if (country) {
          const countryData = await fetchCountryData(country);
          const countryDailyData = await fetchDailyCountryData(country);
          setGlobalStats(countryData);
          setDailyStats(countryDailyData);
          setContinentData([{name: country,cases: countryData.confirmed,
                        deaths: countryData.deaths,recovered: countryData.recovered,
                        title: country}])
 
    }
    else {
        const totalStats = await FetchTotalStats();
        const dailyDataStats = await FetchDailyData();
        const continentsData = await fetchContinentData();
        setGlobalStats(totalStats);
        setDailyStats(dailyDataStats);
        setContinentData (continentsData);
    }
  }

  return (
    <div>
      <img src={image} alt="Covid-19 logo" className="image"/>
      <Cards globalStats={globalStats}/>
      <CountryPicker countriesName = {countriesName} handleCountryPicker={handleCountryPicker}/>
      <Graph dailyStats = {dailyStats} continentData = {continentData}/>
      
    </div>
  );
}

export default App;
