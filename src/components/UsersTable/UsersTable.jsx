import { useDispatch, useSelector } from 'react-redux'
import { SELECT_ALL_USERS, SELECT_USER } from '../../store/actionTypes'
import { formatAs } from '../../utils/format'
import './UsersTable.scss'

const UsersTable = () => {
  const dispatch = useDispatch()
  const { users, usersLoading, selectedUsers, selectedCompanies } = useSelector(state => state.downloads)
  const pages = 0

  const selectHandler = userId => {
    dispatch({ type: SELECT_USER, payload: userId })
  }

  const selectAllHandler = () => {
    dispatch({ type: SELECT_ALL_USERS })
  }

  const applyCompaniesFilter = selectedCompanies.length > 0

  const filteredUsers = applyCompaniesFilter
    ? users.filter(u => u.companies.map(c => c.id).some(c => selectedCompanies.includes(c))).map(u => u.id)
    : users

  const allUsersSelected = filteredUsers.length === selectedUsers.length

  if (usersLoading) {
    return <div className='users-table-placeholder'>Loading...</div>
  }

  if (users.length === 0) {
    return <div className='users-table-placeholder'>No Users Found</div>
  }

  return (
    <>
      <div className='users-table-container'>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Agency Number</th>
              <th>Agency Name</th>
              <th>Main Agent</th>
              <th>Last Notify</th>
              <th>
                <input
                  type='checkbox'
                  name=''
                  id=''
                  checked={allUsersSelected}
                  onChange={selectAllHandler}
                  disabled={false}
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter(u =>
                applyCompaniesFilter ? u.companies.map(c => c.id).some(c => selectedCompanies.includes(c)) : true
              )
              .map(u => (
                <tr key={u.id}>
                  <td>
                    {u.name} ' ' {u.companies.map(c => c.id.charAt(0)).join(',')}
                  </td>
                  <td>{formatAs.phone(u.phone)}</td>
                  <td>{u.agencyNumber}</td>
                  <td>{u.agencyName}</td>
                  <td>{u.mainAgent}</td>
                  <td>{u.lastNotify.toLocaleString()}</td>
                  <td>
                    <input
                      type='checkbox'
                      name=''
                      id=''
                      checked={selectedUsers.includes(u.id)}
                      onChange={() => selectHandler(u.id)}
                      disabled={false}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {pages > 0 && <div className='users-table-paging'>Pages</div>}
    </>
  )
}

export default UsersTable
