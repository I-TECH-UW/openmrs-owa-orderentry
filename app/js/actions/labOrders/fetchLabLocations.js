import axiosInstance from '../../config';

const fetchLabLocations = () => ({
  type: 'FETCH_LAB_LOCATIONS',
  payload: axiosInstance.get(`/location?tag=mCSD+Laboratory&v=custom:(uuid,name)`),
});

export default fetchLabLocations;
