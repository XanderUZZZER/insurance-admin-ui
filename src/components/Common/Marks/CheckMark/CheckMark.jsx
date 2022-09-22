import classNames from 'classnames'
import MarkContainer from '../MarkContainer'
import './CheckMark.scss'

const CheckMark = ({ size = 'md', green = false }) => {
  return (
    <MarkContainer>
      <div
        className={classNames('check-mark', {
          green,
          small: size === 'sm',
          large: size === 'lg',
          xLarge: size === 'xl',
        })}
      ></div>
    </MarkContainer>
  )
}

export default CheckMark
