import { insuranceFieldType } from '../types/insuranceField'
import { reportRecordStatusType } from '../types/reportRecordStatus'
import { getRandomDate } from '../utils/date'
import { formatAs } from '../utils/format'
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
  const reports = [...Array(count)].map((_, i) => ({
    id: i + 1,
    name: `report ${i + 1}`,
    field: buildField(),
    status: buildDownloadStatus(),
  }))
  return reports
}

export const buildUser = () => {
  return {
    name: `User Name ${getRandomInt()}`,
    reports: buildReports(getRandomInt(1, 6)).map((r, i) => ({
      ...r,
      downloadAllowed: !!getRandomInt(0, 1),
      company: `Company ${i + 1}`,
      number: r.id,
      successCount: getRandomInt(0, 10),
      scanErrCount: getRandomInt(0, 10),
      reportErrCount: getRandomInt(0, 10),
      notDownloadedCount: getRandomInt(0, 10),
    })),
    agenciesDownloadsCount: getRandomInt(0, 10),
    agenciesPendingCount: getRandomInt(0, 10),
  }
}

export const buildUsers = (count = 10) => {
  const users = [...Array(count)].map((_, i) => {
    const id = i + 1
    const agencyNumber = getRandomInt(1, 100)
    const mainAgentId = getRandomInt(1, 1000)
    const lastNotify = getRandomDate(new Date(2012, 1, 1))
    return {
      id,
      name: `User ${id}`,
      phone: '+972998887766',
      agencyNumber,
      agencyName: `Agency ${agencyNumber}`,
      mainAgentId,
      mainAgent: `Main Agent ${mainAgentId}`,
      lastNotify,
      companies: [...Array(getRandomInt(1, 9))].map((_, i) => ({ id: i + 1 + 'companyId', name: `Company ${i + 1}` })),
    }
  })
  return users
}

const buildField = () => getRandomValue(insuranceFieldType)

const buildDownloadStatus = () => getRandomValue(reportRecordStatusType)

const getRandomValue = obj => {
  const values = Object.values(obj)
  const value = values[getRandomInt(0, values.length - 1)]
  return value
}
