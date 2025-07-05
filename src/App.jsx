
import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import { Navbar } from './ui/components/Navbar'

function App() {
  return (
    <>
      <>
        <header>
          <p>Header</p>
        </header>

        <Navbar />

        <AppRoutes />

        <footer>
          <p>Footer</p>
        </footer>
      </>
    </>
  )
}

export default App
