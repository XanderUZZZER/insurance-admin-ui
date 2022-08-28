import { COMPANIES_AGENCY, COMPANIES_FAIL, COMPANIES_LOADING, COMPANIES_PHONE, COMPANIES_SUCCESS } from '../actionTypes'

const initialState = { companies: [], companiesLoading: false, agencyNumber: '', phoneNumber: '' }
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
    case COMPANIES_AGENCY:
      return {
        ...state,
        agencyNumber: payload,
      }
    case COMPANIES_PHONE:
      return {
        ...state,
        phoneNumber: payload,
      }
    default:
      return state
  }
}
