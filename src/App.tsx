import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import { Footer } from './Components/Footer/Footer'
import { HomePage } from './Pages/HomePage'
import { ImpressPage } from './Pages/ImpressPage'
import { DataPrivacyPage } from './Pages/DataPrivacyPage'
import { ArtPortfolioPage } from './Pages/ArtPortfolioPage'
import { CookieNotice } from './Components/CookieNotice/CookieNotice'
import { CookieDimension } from './Pages/CookieDimension'

const App = () => {
  return (
    <div className="container">
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/art-portfolio" element={<ArtPortfolioPage />} />
          <Route path="/impress" element={<ImpressPage />} />
          <Route path="/data-privacy" element={<DataPrivacyPage />} />
          <Route path="/cookie-dimension" element={<CookieDimension />} />
        </Routes>
        <CookieNotice />
        <Footer />
      </HashRouter>
    </div>
  )
}

export default App
