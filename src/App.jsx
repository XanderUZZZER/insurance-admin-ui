import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { baseRoute, downloadsTrackingRoute, routes } from './API/routes'
import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen'
import './App.css'

function App() {
  const deafultBaseRoute = routes.find(route => route.route === downloadsTrackingRoute).route ?? baseRoute
  const baseRouteElement = routes.find(route => route.route === deafultBaseRoute).element ?? <WelcomeScreen />

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={deafultBaseRoute} element={baseRouteElement} />
          {routes.map(route => (
            <Route path={route.route} element={route.element} key={route.route + route.text} />
          ))}
          <Route path='*' element={<Navigate to={deafultBaseRoute} replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
