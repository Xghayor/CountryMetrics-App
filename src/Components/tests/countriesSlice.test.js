import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { countryData } from '../../Redux/Countries/countriesSlice';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('countryData async thunk', () => {
  it('should dispatch the correct actions for a successful API call', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(),
    });

    const store = mockStore({});
    const countryName = 'CountryName';

    const expectedActions = [
      countryData.pending.type,
      countryData.fulfilled.type,
    ];

    await store.dispatch(countryData(countryName));

    const dispatchedActions = store.getActions().map(action => action.type);
    expect(dispatchedActions).toEqual(expectedActions);
  });

  it('should dispatch the correct actions for a failed API call', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      statusText: 'Network error',
    });

    const store = mockStore({});
    const countryName = 'CountryName'; 

    const expectedActions = [
      countryData.pending.type,
      countryData.rejected.type,
    ];

    await store.dispatch(countryData(countryName));
    const dispatchedActions = store.getActions().map(action => action.type);
    expect(dispatchedActions).toEqual(expectedActions);
  });
});
