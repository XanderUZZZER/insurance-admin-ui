import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import InputSearch from '../../components/InputSearch/InputSearch'
import TrackingTable from '../../components/TrackingTable/TrackingTable'
import BaseScreen from '../../Containers/BaseScreen/BaseScreen'
import { useDidMount } from '../../hooks/useDidMount'
import { getCompanies, setAgency, setPhone } from '../../store/actions/downloadsActions'
import './DownloadsTrackingScreen.scss'

const DownloadsTrackingScreen = () => {
  const dispatch = useDispatch()
  const { agencyNumber, phoneNumber } = useSelector(state => state.downloads)
  const didMount = useDidMount()

  const searchCompanies = () => {
    dispatch(getCompanies())
  }

  useEffect(() => {
    if (!didMount) {
      dispatch(getCompanies())
    }
  }, [agencyNumber, phoneNumber, dispatch, didMount])

  return (
    <BaseScreen header={'Report Downloads Tracking'}>
      <div className='downloads-tracking-screen'>
        <div className='downloads-tracking-controls'>
          <div className='downloads-tracking-month'>
            <label htmlFor='monthInput'>Month</label>
            <input type='month' id='monthInput' name='monthInput' value='2018-05' max={'2022-06'} onChange={() => {}} />
          </div>
          <div className='downloads-tracking-search'>
            <InputSearch
              placeholder='Search Agency Number'
              value={agencyNumber}
              onChange={value => dispatch(setAgency(value))}
            />
            <InputSearch
              placeholder='Search Phone Number (+972)'
              value={phoneNumber}
              onChange={value => dispatch(setPhone(value))}
            />
          </div>
          <div className='downloads-tracking-refresh'>
            <button onClick={searchCompanies}>Refresh</button>
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
