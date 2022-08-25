import Input from '../../components/Input/Input'
import TrackingTable from '../../components/TrackingTable/TrackingTable'
import BaseScreen from '../BaseScreen/BaseScreen'
import './DownloadsTrackingScreen.scss'

const DownloadsTrackingScreen = () => {
  return (
    <BaseScreen header={'Report Downloads Tracking'}>
      <div className='downloads-tracking-screen'>
        <div className='downloads-tracking-controls'>
          <div className='downloads-tracking-date'>datePicker</div>
          <div className='downloads-tracking-search'>
            <div>
              <Input placeholder={'Number'} />
            </div>
            <div>
              <Input placeholder={'Phone'} />
            </div>
          </div>
          <div className='downloads-tracking-refresh'>refresh btn</div>
        </div>
        <div className='downloads-tracking-table-wrapper'>
          <TrackingTable />
        </div>
      </div>
    </BaseScreen>
  )
}

export default DownloadsTrackingScreen
