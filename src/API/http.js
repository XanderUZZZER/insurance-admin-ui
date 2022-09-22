import { buildCompanies, buildUser, buildUsers } from '../services/mock'
import { delay } from '../utils/delay'

export const getCompaniesRequest = async () => {
  await delay()
  const companies = buildCompanies()
  return companies
}

export const getUserRequest = async () => {
  await delay()
  const user = buildUser()
  return user
}

export const getUsersRequest = async () => {
  await delay()
  const users = buildUsers()
  return users
}
