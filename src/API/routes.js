import ScreenWithNavbar from '../Containers/ScreenWithNavbar/ScreenWithNavbar'
import ChatbotScreen from '../screens/ChatbotScreen/ChatbotScreen'
import DownloadsManagementScreen from '../screens/DownloadsManagementScreen/DownloadsManagementScreen'
import DownloadsTrackingScreen from '../screens/DownloadsTrackingScreen/DownloadsTrackingScreen'
import NotificationsScreen from '../screens/NotificationsScreen/NotificationsScreen'

export const baseRoute = '/'
export const downloadsTrackingRoute = `${baseRoute}downloads-tracking`
export const downloadsManagementRoute = `${baseRoute}downloads-management`
export const notificationsRoute = `${baseRoute}notifications`
// export const chatbotRoute = `${baseRoute}chatbot`

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
    text: 'Notifications & Pop-ups',
    route: notificationsRoute,
    element: (
      <ScreenWithNavbar>
        <NotificationsScreen />
      </ScreenWithNavbar>
    ),
  },
  // {
  //   text: 'Chatbot',
  //   route: chatbotRoute,
  //   element: (
  //     <ScreenWithNavbar>
  //       <ChatbotScreen />
  //     </ScreenWithNavbar>
  //   ),
  // },
]
