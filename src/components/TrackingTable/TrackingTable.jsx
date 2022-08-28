import { useSelector } from 'react-redux'
import { insuranceField } from '../../types/insuranceField'
import { reportRecordStatus } from '../../types/reportRecordStatus'
import './TrackingTable.scss'

const TrackingTable = () => {
  const { companies, companiesLoading } = useSelector(state => state.downloads)
  const pages = 0

  if (companiesLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <div className='tracking-table-container'>
        {companies.map(c => (
          <div className='tracking-company-table-container' key={c.id}>
            <table>
              <thead>
                <tr>
                  <th>
                    {c.name} ({c.id})
                  </th>
                  <th>Name</th>
                  <th>Field</th>
                  <th>Status</th>
                  <th>Status Desc</th>
                </tr>
              </thead>
              <tbody>
                {c.reports.map(r => (
                  <tr key={r.id}>
                    <td>{r.id}</td>
                    <td>{r.name}</td>
                    <td>{insuranceField[r.field].nameEn}</td>
                    <td>{r.status}</td>
                    <td>{reportRecordStatus[r.status].titleEn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
      {pages > 0 && <div className='tracking-table-paging'>Pages</div>}
    </>
  )
}

export default TrackingTable
