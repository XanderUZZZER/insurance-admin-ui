import { buildCompanies } from '../services/mock'
import { delay } from '../utils/delay'

export const getCompaniesRequest = async () => {
  await delay()
  const companies = buildCompanies()
  return companies
}
