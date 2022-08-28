import './BaseScreen.scss'

const BaseScreen = ({ header, children }) => {
  return (
    <>
      {header && (
        <div className='base-screen-header'>
          <h4>{header}</h4>
        </div>
      )}
      {children}
    </>
  )
}

export default BaseScreen
