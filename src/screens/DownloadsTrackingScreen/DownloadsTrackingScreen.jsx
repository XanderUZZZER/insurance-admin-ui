import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import InputSearch from '../../components/InputSearch/InputSearch'
import TrackingTable from '../../components/TrackingTable/TrackingTable'
import BaseScreen from '../../Containers/BaseScreen/BaseScreen'
import useDebounce from '../../hooks/useDebounce'
import useDidMount from '../../hooks/useDidMount'
import { getCompanies } from '../../store/actions/downloadsActions'
import { COMPANIES_CLEAR } from '../../store/actionTypes'
import { getLastMonth } from '../../utils/date'
import './DownloadsTrackingScreen.scss'

const getDateMonth = date => new Date(date).toISOString().substr(0, 7)

const initDate = getDateMonth(getLastMonth().from)

const minDate = () => {
  const min = new Date(initDate)
  min.setFullYear(min.getFullYear() - 1)
  min.setMonth(min.getMonth() + 1)
  return getDateMonth(min)
}

const DownloadsTrackingScreen = () => {
  const dispatch = useDispatch()
  const [agency, setAgency] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [month, setMonth] = useState(initDate)

  const debouncedAgency = useDebounce(agency)
  const debouncedPhoneNumber = useDebounce(phoneNumber)
  const didMount = useDidMount()

  const setMonthHandler = e => setMonth(getDateMonth(e.target.value))

  const searchCompanies = useCallback(() => {
    if (debouncedAgency.length > 0 || debouncedPhoneNumber.length > 0) {
      dispatch(getCompanies(debouncedAgency, debouncedPhoneNumber, new Date(month)))
    }
  }, [debouncedAgency, debouncedPhoneNumber, month, dispatch])

  useEffect(() => {
    didMount && searchCompanies()
    return () => {
      dispatch({ type: COMPANIES_CLEAR })
    }
  }, [didMount, searchCompanies, dispatch])

  return (
    <BaseScreen header={'Report Downloads Tracking'}>
      <div className='downloads-tracking-screen'>
        <div className='downloads-tracking-controls'>
          <div className='downloads-tracking-month'>
            <label htmlFor='monthInput'>Month</label>
            <input
              type='month'
              id='monthInput'
              name='monthInput'
              value={month}
              max={initDate}
              min={minDate()}
              onChange={setMonthHandler}
            />
          </div>
          <div className='downloads-tracking-search'>
            <InputSearch placeholder='Search Agency Number' value={agency} onChange={value => setAgency(value)} />
            <InputSearch
              placeholder='Search Phone Number (+972)'
              value={phoneNumber}
              onChange={value => setPhoneNumber(value)}
            />
          </div>
          <div className='downloads-tracking-refresh'>
            <button onClick={searchCompanies} disabled={agency.length === 0 && phoneNumber.length === 0}>
              Refresh
            </button>
          </div>
        </div>
        <div className='downloads-tracking-table-wrapper'>
          <TrackingTable />
        </div>
      </div>
    </BaseScreen>
  )
}

export default DownloadsTrackingScreen
