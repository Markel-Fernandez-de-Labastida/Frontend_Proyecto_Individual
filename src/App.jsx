
import './App.css'
import { AppRoutes } from './routes/AppRoutes'
import { Footer } from './ui/components/Footer'
import { Navbarr } from './ui/components/Navbarr'

function App() {
  return (
    <>
      <>
        {/*         <header>
          <p>Header</p>
        </header> */}

        <Navbarr />

        <AppRoutes />

        <Footer />

        {/* <footer>
          <p>Footer</p>
        </footer> */}
      </>
    </>
  )
}

export default App
