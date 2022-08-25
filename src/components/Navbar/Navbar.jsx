import { NavLink } from 'react-router-dom'
import { routes } from '../../API/routes'
import './Navbar.scss'

const Navbar = () => {
  return (
    <nav>
      <ul>
        {routes.map(item => (
          <NavLink to={item.route} key={item.route + item.text}>
            <li>{item.text}</li>
          </NavLink>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
