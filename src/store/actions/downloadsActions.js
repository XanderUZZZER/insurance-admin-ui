import {
  COMPANIES_AGENCY,
  COMPANIES_FAIL,
  COMPANIES_LOADING,
  COMPANIES_PHONE,
  COMPANIES_SUCCESS,
  PREF_UPDATE_FAIL,
  PREF_UPDATE_LOADING,
  PREF_UPDATE_SUCCESS,
  USER_FAIL,
  USER_LOADING,
  USER_SUCCESS,
} from '../actionTypes'
import { getCompaniesRequest, getUserRequest } from '../../API/http'
import { delay } from '../../utils/delay'
import { getRandomInt } from '../../utils/number'

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

export const searchUser = userName => async dispatch => {
  dispatch({ type: USER_LOADING })
  try {
    //const { agencyNumber, phoneNumber } = getState().downloads
    const data = await getUserRequest()
    dispatch({
      type: USER_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USER_FAIL,
      payload: error,
    })
  }
}

export const updateReportPref = (reportId, value) => async dispatch => {
  dispatch({ type: PREF_UPDATE_LOADING })
  try {
    await delay(getRandomInt(500, 1500))
    const success = true
    dispatch({
      type: PREF_UPDATE_SUCCESS,
      payload: { reportId, success, value },
    })
  } catch (error) {
    dispatch({
      type: PREF_UPDATE_FAIL,
      payload: error,
    })
  }
}
