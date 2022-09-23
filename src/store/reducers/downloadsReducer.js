import {
  COMPANIES_CLEAR,
  COMPANIES_FAIL,
  COMPANIES_LOADING,
  COMPANIES_SUCCESS,
  PREF_UPDATE_FAIL,
  PREF_UPDATE_LOADING,
  PREF_UPDATE_SUCCESS,
  SELECT_ALL_USERS,
  SELECT_COMPANIES,
  SELECT_USER,
  SELECT_USERS,
  USERS_FAIL,
  USERS_LOADING,
  USERS_SUCCESS,
  USER_FAIL,
  USER_LOADING,
  USER_SUCCESS,
} from '../actionTypes'

const initialState = {
  companies: [],
  companiesLoading: false,
  user: null,
  userLoading: false,
  updateReportSucces: false,
  updateReportLoading: false,
  users: [],
  usersLoading: false,
  selectedUsers: [],
  selectedCompanies: [],
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
    case COMPANIES_CLEAR:
      return {
        ...state,
        companiesLoading: false,
        companiesError: null,
        companies: [],
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
    case USERS_LOADING:
      return {
        ...state,
        usersLoading: true,
        users: [],
        usersError: null,
      }
    case USERS_SUCCESS:
      return {
        ...state,
        usersLoading: false,
        users: payload,
        usersError: null,
        selectedUsers: payload.map(u => u.id),
      }
    case USERS_FAIL:
      return {
        ...state,
        usersLoading: false,
        usersError: payload,
      }
    case SELECT_USER:
      return {
        ...state,
        selectedUsers: state.selectedUsers.includes(payload)
          ? state.selectedUsers.filter(u => u !== payload)
          : [...state.selectedUsers, payload],
      }
    case SELECT_USERS:
      return {
        ...state,
        selectedUsers: payload,
      }
    case SELECT_ALL_USERS:
      const filterApplied = state.selectedCompanies.length > 0
      const filteredUsers = filterApplied
        ? state.users
            .filter(u => u.companies.map(c => c.id).some(c => state.selectedCompanies.includes(c)))
            .map(u => u.id)
        : state.users.map(u => u.id)
      return {
        ...state,
        selectedUsers: state.selectedUsers.length === filteredUsers.length ? [] : filteredUsers,
      }
    case SELECT_COMPANIES:
      return {
        ...state,
        selectedCompanies: state.selectedCompanies.includes(payload)
          ? state.selectedCompanies.filter(c => c !== payload)
          : [...state.selectedCompanies, payload],
        selectedUsers: [],
      }
    default:
      return state
  }
}
