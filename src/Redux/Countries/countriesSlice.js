import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    loading:true,
    Countries: [],
    error:''
}



const CountriesSlice = createSlice({
  name: 'Countries',
  initialState: [],
  reducers: {}
})

export const {  } = CountriesSlice.actions
export default CountriesSlice.reducer