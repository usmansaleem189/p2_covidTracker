import React from 'react';

const url = 'https://covid19.mathdro.id/api';

export const FetchTotalStats = async () => {
   // console.log('FetchTotalStats');

  try {
    const response = await fetch(url)
    let data = await response.json();
    let modifiedData = {
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.deaths.value,
            lastUpdate: new Date(data.lastUpdate).toDateString()
          };

    return modifiedData;

    //console.log(modifiedData);
  }
  catch (error) {
    console.log(error)
  }

}

export const FetchDailyData = async () => {
  try {
    const response = await fetch (url+"/daily");
    let data = await response.json();
    const modifiedDailyData = {
      confirmed: data.map (dat => dat.confirmed.total),
      deaths: data.map (dat => dat.deaths.total),
      reportDate: data.map(dat => dat.reportDate),
      name: "Global"
    }

   //console.log(modifiedDailyData);
    return modifiedDailyData;
  }
  catch (error) {
    console.log(error)
  }
}

export const fetchContinentData = async () => {
  try {
      // const { data } = await axios.get(`https://corona.lmao.ninja/v2/continents?yesterday=true&sort`);
      const response = await fetch("https://corona.lmao.ninja/v2/continents?yesterday=true&sort");
      let data = await response.json();
      const modifiedData = data.map((continent) => ({
          name: continent.continent,
          cases: continent.cases,
          deaths: continent.deaths,
          recovered: continent.recovered,
          title: "All Continents"
      }))
      // console.log(modifiedData);
      return modifiedData;
  } catch (error) {
      console.log(error);
  }
}

export const fetchCountriesName = async () => {
  try {
      const response = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort");
      let data = await response.json();

      const response1 = await fetch("https://pomber.github.io/covid19/timeseries.json");
      let data1 = await response1.json();

      let modifiedData = data.map(country => country.country);
      const filteredModifiedData = modifiedData.filter((name) => Object.keys(data1).includes(name));
      //console.log(filteredModifiedData);
      return filteredModifiedData;

  } catch (error) {
      console.log(error);
  }
}

export const fetchCountryData = async (country) => {
  try {
        const response = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort");
        let data = await response.json();

        const filteredData = data.filter((obj)=> (obj.country === country));
        const requiredData = {
          confirmed: filteredData[0].cases,
          recovered: filteredData[0].recovered,
          deaths: filteredData[0].deaths,
          lastUpdate: new Date(filteredData[0].updated).toDateString()
        }

        return requiredData;

  }
  catch(error) {
    console.log(error)
  }
}

export const fetchDailyCountryData = async (country) => {
    
  try {
      const response1 = await fetch("https://pomber.github.io/covid19/timeseries.json");
      let data1 = await response1.json();
      const countryData = (data1[country]);
      const modifiedData1 =  {
          confirmed: countryData.map(obj => obj.confirmed),
          deaths: countryData.map(obj => obj.deaths),
          reportDate: countryData.map (obj => obj.date),
          name: country
      }
      // console.log(Object.keys(data1));
      //console.log(modifiedData1[0].name);
      //console.log(modifiedData1);
      return modifiedData1;

  } catch (error) {
      console.log(error);
  }
}