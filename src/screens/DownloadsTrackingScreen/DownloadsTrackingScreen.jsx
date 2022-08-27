import Input from '../../components/Input/Input'
import TrackingTable from '../../components/TrackingTable/TrackingTable'
import BaseScreen from '../BaseScreen/BaseScreen'
import { useDispatch } from 'react-redux'
import './DownloadsTrackingScreen.scss'
import { getCompanies } from '../../store/actions/downloadsActions'

const DownloadsTrackingScreen = () => {
  const dispatch = useDispatch()
  return (
    <BaseScreen header={'Report Downloads Tracking'}>
      <div className='downloads-tracking-screen'>
        <div className='downloads-tracking-controls'>
          <div className='downloads-tracking-month'>
            <label htmlFor='monthInput'>Month</label>
            <input type='month' id='monthInput' name='monthInput' value='2018-05' max={'2022-06'} />
          </div>
          <div className='downloads-tracking-search'>
            <Input placeholder={'Number'} />
            <Input placeholder={'Phone'} />
          </div>
          <div className='downloads-tracking-refresh'>
            <button onClick={() => dispatch(getCompanies())}>Refresh</button>
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
