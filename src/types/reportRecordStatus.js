import ErrorsLog from './ErrorsLog.json'

export const reportRecordStatusType = {
  none: 10,
  loginError: 15,
  vaultError: 17,
  downloadCanceled: 18,
  unexpectedPage: 19,
  downloadFailed: 20,
  notAccessible: 25,
  unknownScanError: 30,
  saved: 50,
  saveFailed: 55,
  fileCorrupted: 57,
  noData: 60,
  reportNotFound: 65,
  inCorrectFileMonth: 70,
}

export const reportRecordActionType = {
  Retry: 'Retry',
  OK: 'OK',
  UpdateCredentials: 'UpdateCredentials',
  UpdateVaultCredentials: 'UpdateVaultCredentials',
}

export const reportRecordLinkType = {
  site: 'site',
  support: 'support',
}

const { reportErrors } = ErrorsLog
export const reportRecordStatus = reportErrors.reduce((acc, curErr) => {
  return {
    ...acc,
    [curErr.status]: curErr,
  }
}, {})
