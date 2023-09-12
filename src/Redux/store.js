import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './Countries/countriesSlice'
import inputReducer from '../Redux/Search/inputSlice';


const store = configureStore({
    reducer:{
      countries: countryReducer,
      input: inputReducer,
    },
  })

  export default store;