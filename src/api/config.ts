export const API_CONFIG = {
  BASE_URL: 'https://api.jyotish.com',
  TIMEOUT: 10000,
  VERSION: 'v1',
  ENDPOINTS: {
    PANCHANGA: 'panchanga',
    PANCHANGA_BY_LOCATION: 'panchanga/location'
  }
};

export const getApiUrl = (endpoint: string) => 
  `${API_CONFIG.BASE_URL}/${API_CONFIG.VERSION}/${endpoint}`;
