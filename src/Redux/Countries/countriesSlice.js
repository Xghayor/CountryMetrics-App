import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  countries: [],
  error: '',
};

export const countryData = createAsyncThunk(
  'countries/getData',
  async (country) => {
    const apiKey = '3DPT6zJuhp6ivWqildtvnA==aOy3cSTtq3BUgEhT';
    const apiUrl = `https://api.api-ninjas.com/v1/country?name=${country}`;

    const response = await fetch(apiUrl, {
      headers: {
        'X-Api-Key': apiKey,
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  },
);

const CountriesSlice = createSlice({
  name: 'Countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(countryData.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(countryData.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
        state.error = '';
      })
      .addCase(countryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default CountriesSlice.reducer;
