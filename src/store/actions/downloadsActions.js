import { COMPANIES_FAIL, COMPANIES_LOADING, COMPANIES_SUCCESS } from '../actionTypes'
import { getCompaniesRequest } from '../../API/http'

export const getCompanies = () => async dispatch => {
  dispatch({ type: COMPANIES_LOADING })
  try {
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
