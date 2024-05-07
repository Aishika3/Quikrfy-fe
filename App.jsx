import { AppRoutes } from 'routes/main'
import { AppProvider } from 'providers/app'
import './App.css'

function App() {
  return (
    <AppProvider>
      <AppRoutes/>
    </AppProvider>
  )
}

export default App
