import { HashRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './Components/Footer'
import { HomePage } from './Pages/HomePage'
import { ImpressPage } from './Pages/ImpressPage'
import { DataPrivacyPage } from './Pages/DataPrivacyPage'
import { ArtPortfolioPage } from './Pages/ArtPortfolioPage'

const App = () => {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/art-portfolio" element={<ArtPortfolioPage />} />
          <Route path="/impress" element={<ImpressPage />} />
          <Route path="/data-privacy" element={<DataPrivacyPage />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
