import { COMPANIES_FAIL, COMPANIES_LOADING, COMPANIES_SUCCESS } from '../actionTypes'

const initialState = { companies: [], companiesLoading: true }
export const downloadsReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case COMPANIES_LOADING:
      return {
        ...state,
        companiesLoading: true,
        companies: [],
      }
    case COMPANIES_SUCCESS:
      return {
        ...state,
        companiesLoading: false,
        companies: payload,
      }
    case COMPANIES_FAIL:
      return {
        ...state,
        companiesLoading: false,
        companiesError: payload,
      }
    default:
      return state
  }
}
