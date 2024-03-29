import { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.module.css';
import { fetchCountries } from '../../api';


const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());  
    }
    fetchAPI();
  }, [ setFetchedCountries ])

  return (
    <div>
      <FormControl className={styles.FormControl}>
        <NativeSelect defaultValue="" onChange={e => handleCountryChange(e.target.value)}>
          <option value="">Global</option>
          { fetchedCountries.map((country, idx) => 
              <option key={idx} value={country}>{country}</option>
          )}
        </NativeSelect>
      </FormControl>
    </div>
  )
}

export default CountryPicker;