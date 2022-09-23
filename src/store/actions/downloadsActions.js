import {
  COMPANIES_SUCCESS,
  COMPANIES_LOADING,
  COMPANIES_FAIL,
  PREF_UPDATE_FAIL,
  PREF_UPDATE_LOADING,
  PREF_UPDATE_SUCCESS,
  USERS_FAIL,
  USERS_LOADING,
  USERS_SUCCESS,
  USER_FAIL,
  USER_LOADING,
  USER_SUCCESS,
} from '../actionTypes'
import { getCompaniesRequest, getUserRequest, getUsersRequest } from '../../API/http'
import { delay } from '../../utils/delay'
import { getRandomInt } from '../../utils/number'

export const getCompanies = (agency, phoneNumber, month) => async dispatch => {
  dispatch({ type: COMPANIES_LOADING })
  try {
    const data = await getCompaniesRequest(agency, phoneNumber, month)
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

export const searchUser = userName => async dispatch => {
  dispatch({ type: USER_LOADING })
  try {
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

export const getUsers = () => async dispatch => {
  dispatch({ type: USERS_LOADING })
  try {
    const data = await getUsersRequest()
    dispatch({
      type: USERS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: USERS_FAIL,
      payload: error,
    })
  }
}
