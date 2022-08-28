import { COMPANIES_AGENCY, COMPANIES_FAIL, COMPANIES_LOADING, COMPANIES_PHONE, COMPANIES_SUCCESS } from '../actionTypes'
import { getCompaniesRequest } from '../../API/http'

export const getCompanies = () => async (dispatch, getState) => {
  dispatch({ type: COMPANIES_LOADING })
  try {
    //const { agencyNumber, phoneNumber } = getState().downloads
    const data = await getCompaniesRequest()
    dispatch({
      type: COMPANIES_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: COMPANIES_FAIL,
      payload: error,
    })
  }
}

export const setAgency = agency => {
  return {
    type: COMPANIES_AGENCY,
    payload: agency,
  }
}

export const setPhone = phone => {
  return {
    type: COMPANIES_PHONE,
    payload: phone,
  }
}
