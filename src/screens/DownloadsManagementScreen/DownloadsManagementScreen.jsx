import classNames from 'classnames'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputSearch from '../../components/InputSearch/InputSearch'
import ReportsDownloadsTable from '../../components/ReportsDownloadsTable/ReportsDownloadsTable'
import ReportsPrefsTable from '../../components/ReportsPrefsTable/ReportsPrefsTable'
import BaseScreen from '../../Containers/BaseScreen/BaseScreen'
import { searchUser } from '../../store/actions/downloadsActions'
import './DownloadsManagementScreen.scss'

const DownloadsManagementScreen = () => {
  const dispatch = useDispatch()
  const { userLoading } = useSelector(state => state.downloads)

  const [userToSearch, setUserToSearch] = useState('')
  const [openForAll, setOpenForAll] = useState(false)
  const [currTable, setCurrTable] = useState(tableType.preferences)

  const tables = [
    {
      id: 1,
      type: tableType.preferences,
      setActive: () => setCurrTable(tableType.preferences),
      text: "User's Reports Preferences",
    },
    {
      id: 2,
      type: tableType.downloads,
      setActive: () => setCurrTable(tableType.downloads),
      text: "User's Reports Downloads",
    },
  ]

  const openForAllHandler = () => setOpenForAll(!openForAll)

  const searchUserHandler = () => dispatch(searchUser())

  const renderTable = () => (currTable === tableType.preferences ? <ReportsPrefsTable /> : <ReportsDownloadsTable />)

  return (
    <BaseScreen header={'Report Downloads Management'}>
      <div className='downloads-management-screen'>
        <div className='downloads-management-controls'>
          <div className='downloads-management-open-all'>
            <button onClick={openForAllHandler}>{`${openForAll ? 'Close' : 'Open'} Downloads for All Users`}</button>
          </div>
          <div className='downloads-management-user-search-container'>
            <div className='downloads-management-user-search'>
              <InputSearch placeholder='Search User' value={userToSearch} onChange={value => setUserToSearch(value)} />
            </div>
            <button onClick={searchUserHandler} disabled={userToSearch.length < 3 || userLoading}>
              Search
            </button>
          </div>
        </div>
        <div className='downloads-management-navbar-wrapper'>
          <nav>
            <ul>
              {tables.map(t => (
                <li key={t.id} className={classNames({ 'active-tab': currTable === t.type })} onClick={t.setActive}>
                  {t.text}
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='downloads-management-tables-wrapper'>{renderTable()}</div>
      </div>
    </BaseScreen>
  )
}

export default DownloadsManagementScreen

const tableType = {
  preferences: 'preferences',
  downloads: 'downloads',
}
