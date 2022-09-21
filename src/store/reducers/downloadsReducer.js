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

const initialState = {
  companies: [],
  companiesLoading: false,
  agencyNumber: '',
  phoneNumber: '',
  user: null,
  userLoading: false,
  updateReportSucces: false,
  updateReportLoading: false,
}
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
    case USER_LOADING:
      return {
        ...state,
        userLoading: true,
        user: null,
        userError: null,
      }
    case USER_SUCCESS:
      return {
        ...state,
        userLoading: false,
        user: payload,
        userError: null,
      }
    case USER_FAIL:
      return {
        ...state,
        userLoading: false,
        userError: payload,
      }
    case PREF_UPDATE_LOADING:
      return {
        ...state,
        updateReportLoading: true,
        updateReportSucces: false,
        updateReportError: null,
        updateReportId: payload,
      }
    case PREF_UPDATE_SUCCESS:
      const { reportId: updateReportId, success, value } = payload
      return {
        ...state,
        updateReportLoading: false,
        updateReportSucces: success,
        updateReportError: null,
        updateReportId: updateReportId,
        user: success
          ? {
              ...state.user,
              reports: state.user.reports.map(r => (r.id === updateReportId ? { ...r, downloadAllowed: value } : r)),
            }
          : state.user,
      }
    case PREF_UPDATE_FAIL:
      return {
        ...state,
        updateReportLoading: false,
        updateReportSucces: false,
        updateReportError: payload,
        updateReportId: null,
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
