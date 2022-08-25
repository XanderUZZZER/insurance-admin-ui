import MainHeader from '../../components/MainHeader/MainHeader'
import Navbar from '../../components/Navbar/Navbar'
import './ScreenWithNavbar.scss'

const ScreenWithNavbar = ({ children }) => {
  return (
    <div className='main-wrapper'>
      <MainHeader />
      <div className='navbar-wrapper'>
        <Navbar />
      </div>
      <div className='content-wrapper'>{children}</div>
    </div>
  )
}

export default ScreenWithNavbar
