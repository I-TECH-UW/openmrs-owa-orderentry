import fetchLabLocations from '../../../app/js/actions/labOrders/fetchLabLocations';

describe('fetchLabLocations action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const limit = 10;
  const startIndex = 0;
  const patient = '761d8414-6cb4-4456-be4f-232e6f819e06';

  it(`creates FETCH_LAB_LOCATIONS_LOADING and FETCH_LAB_LOCATIONS_SUCCESS
  action types upon success response from server when nouri ispassed but with given limits`, async (done) => {
    moxios.stubRequest(
      `${apiBaseUrl}/location?tag=mCSD+Laboratory&v=custom:(uuid,name)`,
      {
        status: 201,
        response: [{}],
      },
    );
    const expectedTypes = [
      'FETCH_LAB_LOCATIONS_LOADING',
      'FETCH_LAB_LOCATIONS_SUCCESS',
    ];
    const store = mockStore({});
    return store.dispatch(fetchLabLocations()).then(() => {
      const dispatchedActions = store.getActions();
      const actionTypes = dispatchedActions.map(action => action.type);
      expect(actionTypes).toEqual(expectedTypes);
      done();
    });
  });
});
