import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { insuranceField } from '../../types/insuranceField'
import { percentage } from '../../utils/number'
import './ReportsDownloadsTable.scss'

const ReportsDownloadsTable = () => {
  const { user, userLoading } = useSelector(state => state.downloads)
  const pages = 0

  if (userLoading) {
    return <div className='reports-prefs-table-placeholder'>Loading...</div>
  }

  if (!user) {
    return <div className='reports-prefs-table-placeholder'>Search for a user to see data...</div>
  }

  return (
    <>
      <div className='reports-dwnlds-stats-container'>
        <div className='reports-dwnlds-stats-month'>
          <label htmlFor='monthInput'>Month</label>
          <input type='month' id='monthInput' name='monthInput' value='2018-05' max={'2022-06'} onChange={() => {}} />
        </div>
        <div className='reports-dwnlds-stats-card-container'>
          <div className='reports-dwnlds-stats-card'>
            <h4>Agencies attempted to download</h4>
            <h3>{user.agenciesDownloadsCount}</h3>
          </div>
        </div>
        <div className='reports-dwnlds-stats-card-container'>
          <div className='reports-dwnlds-stats-card'>
            <h4>Agencies pending to download</h4>
            <h3>{user.agenciesPendingCount}</h3>
          </div>
        </div>
      </div>
      <div className='reports-dwnlds-table-container'>
        <table>
          <thead>
            <tr>
              <th>Company</th>
              <th>Report Name</th>
              <th>Report Number</th>
              <th>Field</th>
              <th>Successfully Downloaded</th>
              <th>Scan Error (30)</th>
              <th>Report Error (55/60/65)</th>
              <th>Not Yet Downloaded (10)</th>
            </tr>
          </thead>
          <tbody>
            {user.reports.map(r => {
              const totalAgenciesCount = r.successCount + r.scanErrCount + r.reportErrCount + r.notDownloadedCount
              return (
                <tr key={r.id}>
                  <td>{r.company}</td>
                  <td>{r.name}</td>
                  <td>{r.number}</td>
                  <td>{insuranceField[r.field].nameEn}</td>
                  <td
                    className={classNames({
                      green: percentage(r.successCount, totalAgenciesCount) > 90,
                    })}
                  >
                    {r.successCount}
                  </td>
                  <td
                    className={classNames({
                      red: percentage(r.scanErrCount, totalAgenciesCount) > 5,
                    })}
                  >
                    {r.scanErrCount}
                  </td>
                  <td
                    className={classNames({
                      orange: percentage(r.reportErrCount, totalAgenciesCount) > 5,
                    })}
                  >
                    {r.reportErrCount}
                  </td>
                  <td
                    className={classNames({
                      yellow: percentage(r.notDownloadedCount, totalAgenciesCount) > 50,
                    })}
                  >
                    {r.notDownloadedCount}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {pages > 0 && <div className='reports-dwnlds-table-paging'>Pages</div>}
    </>
  )
}

export default ReportsDownloadsTable
