import React from 'react';
import styles from './CountryPicker.module.css';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

export default function CountryPicker({countriesName, handleCountryPicker}) {

    //console.log(countriesName);

    if (!countriesName.length)
      return null;

  return (
    <Box sx={{ minWidth: 120 }} className= {styles.selectContainer}>
      <FormControl fullWidth>
        <NativeSelect defaultValue="" onChange={(e)=> handleCountryPicker(e.target.value)}>

          <option value="">Global</option>

          {countriesName.map((country,i)=> (
            <option key={i} value={country}>{country}</option>
          ))
          }
        </NativeSelect>
      </FormControl>
    </Box>
  );
}

