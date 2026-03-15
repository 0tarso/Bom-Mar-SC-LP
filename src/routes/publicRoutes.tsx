import { Route, Routes } from 'react-router-dom'
import HomeScreen from '../screens/Home'
import DownloadScreen from '../screens/Download'

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/download" element={<DownloadScreen />} />
    </Routes>
  )
}
