export const ENV = process.env.REACT_APP_ENV;
export const isDevelopment = ENV === 'DEVELOPMENT';
export const isStaging = ENV === 'STAGING';
export const isProduction = ENV === 'PRODUCTION';
export const BASE_URL = `https://www.alphavantage.co`;
export const alpha_api_key = process.env.ALPHA_VANTAGE_API_KEY;
