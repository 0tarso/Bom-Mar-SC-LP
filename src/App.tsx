import { HelmetProvider } from 'react-helmet-async'
import './App.css'
import PublicRoutes from './routes/publicRoutes'

function App() {

  return (
    <div>
      <HelmetProvider>
        <PublicRoutes />
      </HelmetProvider>
    </div>
  )
}

export default App
