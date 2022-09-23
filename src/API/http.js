import axios from 'axios'
import { buildUser } from '../services/mock'
import { delay } from '../utils/delay'
import { BASE_URL, urlAccount, urlReports } from './urls'

const baseURL = BASE_URL

const instance = axios.create({
  baseURL,
})

export const getCompaniesRequest = async (agency, phoneNumber, month) => {
  const {
    data: { data: companies },
  } = await instance({
    url: `${urlReports()}company-reports`,
    method: 'POST',
    data: {
      agency,
      phoneNumber,
      month,
    },
  })
  return companies
}

export const getUserRequest = async () => {
  await delay()
  const user = buildUser()
  return user
}

export const getUsersRequest = async (companiesIds = []) => {
  const {
    data: { data: users },
  } = await instance({
    url: `${urlAccount()}users`,
    method: 'POST',
    data: companiesIds,
  })
  return users.map(u => ({ ...u, companies: [] }))
}
