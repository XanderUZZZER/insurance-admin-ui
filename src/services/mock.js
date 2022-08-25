import { insuranceFieldType } from '../types/insuranceField'
import { reportRecordStatusType } from '../types/reportRecordStatus'
import { getRandomInt } from '../utils/number'

export const buildCompanies = companiesCount => {
  if (!companiesCount) companiesCount = getRandomInt(1, 8)
  const companies = [...Array(companiesCount)].map((_, i) => {
    return {
      id: i + 1,
      name: `Company ${i + 1}`,
      nameEn: `Company En ${i + 1}`,
      reports: buildReports(getRandomInt(1, 5)),
    }
  })
  return companies
}

const buildReports = count => {
  const fields = Object.values(insuranceFieldType)
  const statuses = Object.values(reportRecordStatusType)
  const reports = [...Array(count)].map((_, i) => {
    return {
      id: i + 1,
      name: `report ${i + 1}`,
      field: fields[getRandomInt(0, fields.length - 1)],
      status: statuses[getRandomInt(0, statuses.length - 1)],
    }
  })
  return reports
}
