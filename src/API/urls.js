const masterUrl = 'https://localhost:5009/api/'

if (process.env.REACT_APP_API_ENV === 'development') {
  // -- Local URL ----------------------------------
  // ------------------------------------------------
} else if (process.env.REACT_APP_API_ENV === 'development-prod') {
  // -- production URL from dev ------------------------------
} else {
  // -- production URL ------------------------------
}

export const BASE_URL = masterUrl
const accountUrl = 'account/'
const reportsUrl = 'reports/'

export const urlAccount = () => `${accountUrl}`
export const urlReports = () => `${reportsUrl}`
