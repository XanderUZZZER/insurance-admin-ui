import { useDispatch, useSelector } from 'react-redux'
import { updateReportPref } from '../../store/actions/downloadsActions'
import './ReportsPrefsTable.scss'

const ReportsPrefsTable = () => {
  const dispatch = useDispatch()
  const { user, userLoading, updateReportLoading } = useSelector(state => state.downloads)
  const pages = 0

  const updateReportPrefHandler = (reportId, event) => {
    const value = event.target.checked
    dispatch(updateReportPref(reportId, value))
  }

  if (userLoading) {
    return <div className='reports-prefs-table-placeholder'>Loading...</div>
  }

  if (!user) {
    return <div className='reports-prefs-table-placeholder'>Search for a user to see data...</div>
  }

  return (
    <>
      <div className='reports-prefs-table-container'>
        <table>
          <thead>
            <tr>
              <th>Report Name</th>
              <th>Download Allowed</th>
            </tr>
          </thead>
          <tbody>
            {user.reports.map(r => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>
                  <input
                    type='checkbox'
                    name=''
                    id=''
                    checked={r.downloadAllowed}
                    onChange={e => updateReportPrefHandler(r.id, e)}
                    disabled={updateReportLoading}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {pages > 0 && <div className='reports-prefs-table-paging'>Pages</div>}
    </>
  )
}

export default ReportsPrefsTable
