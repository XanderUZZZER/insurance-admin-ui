import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputSelectMulti from '../../components/Common/InputSelectMulti/InputSelectMulti'
import UsersTable from '../../components/UsersTable/UsersTable'
import BaseScreen from '../../Containers/BaseScreen/BaseScreen'
import { getUsers } from '../../store/actions/downloadsActions'
import { SELECT_COMPANIES } from '../../store/actionTypes'
import './NotificationsScreen.scss'

const NotificationsScreen = () => {
  //const [selectedCompanies, setSelectedCompanies] = useState([])
  const dispatch = useDispatch()
  const { selectedUsers, users, selectedCompanies } = useSelector(state => state.downloads)
  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  const noUsers = selectedUsers.length === 0

  const usersCompanies = [
    ...new Map(users.flatMap(u => u.companies).map(c => [c.id, { ...c, value: c.name }])).values(),
  ]

  const selectCompanyHandler = id => {
    dispatch({ type: SELECT_COMPANIES, payload: id })
    // if (!selectedCompanies.includes(id)) {
    //   setSelectedCompanies([...selectedCompanies, id])
    // } else {
    //   setSelectedCompanies(selectedCompanies.filter(c => c !== id))
    // }
  }

  return (
    <BaseScreen header={'Notifications & Pop-ups'}>
      <div className='notifications-screen'>
        <div className='notifications-controls'>
          <div className='notifications-controls-btn-container'>
            <button disabled={noUsers}>Create a new e-mail</button>
          </div>
          <div className='notifications-controls-filter-container'>
            <InputSelectMulti
              label='Filter by companies'
              items={usersCompanies.map(c => ({ ...c, value: c.name }))}
              selectedItems={selectedCompanies}
              selectItem={selectCompanyHandler}
              deselectItem={selectCompanyHandler}
            />
          </div>
          <div className='notifications-controls-btn-container'>
            <button disabled={noUsers}>Messages Management</button>
          </div>
        </div>
        <div className='users-table-wrapper'>
          <UsersTable />
        </div>
      </div>
    </BaseScreen>
  )
}

export default NotificationsScreen
