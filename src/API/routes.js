import ScreenWithNavbar from '../Containers/ScreenWithNavbar/ScreenWithNavbar'
import ChatbotScreen from '../screens/ChatbotScreen/ChatbotScreen'
import DownloadsManagementScreen from '../screens/DownloadsManagementScreen/DownloadsManagementScreen'
import DownloadsTrackingScreen from '../screens/DownloadsTrackingScreen/DownloadsTrackingScreen'

export const baseRoute = '/'
export const downloadsTrackingRoute = `${baseRoute}downloads-tracking`
export const downloadsManagementRoute = `${baseRoute}downloads-management`
export const chatbotRoute = `${baseRoute}chatbot`

export const routes = [
  {
    text: 'Downloads Tracking',
    route: downloadsTrackingRoute,
    element: (
      <ScreenWithNavbar>
        <DownloadsTrackingScreen />
      </ScreenWithNavbar>
    ),
  },
  {
    text: 'Downloads Management',
    route: downloadsManagementRoute,
    element: (
      <ScreenWithNavbar>
        <DownloadsManagementScreen />
      </ScreenWithNavbar>
    ),
  },
  {
    text: 'Chatbot',
    route: chatbotRoute,
    element: (
      <ScreenWithNavbar>
        <ChatbotScreen />
      </ScreenWithNavbar>
    ),
  },
]
