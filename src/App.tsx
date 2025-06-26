import { Outlet } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App