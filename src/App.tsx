import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom'
import { Breadcrumbs } from './Components/Breadcrumbs/Breadcrumbs'
import { CookieNotice } from './Components/CookieNotice/CookieNotice'
import { Footer } from './Components/Footer/Footer'
import { ArtPortfolioPage } from './Pages/art/ArtPortfolioPage'
import { CookieDimension } from './Pages/CookieDimension'
import { DataPrivacyPage } from './Pages/DataPrivacyPage'
import { HomePage } from './Pages/HomePage'
import { ImpressPage } from './Pages/ImpressPage'
import { Header } from './Components/Header/Header'

const router = createHashRouter([
  {
    path: '/',
    element: (
      <>
        <Header />
        <div className="container">
          <Breadcrumbs />
          <Outlet />
          <CookieNotice />
          <Footer />
        </div>
      </>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/art',
        element: <ArtPortfolioPage />,
        handle: { title: 'NotSteffenWittig Art' },
      },
      {
        path: '/impress',
        element: <ImpressPage />,
        handle: { title: 'Impress' },
      },
      {
        path: '/data-privacy',
        element: <DataPrivacyPage />,
        handle: { title: 'Impress' },
      },
      {
        path: '/cookie-dimension',
        element: <CookieDimension />,
        handle: { title: 'Cookie Dimension' },
      },
    ],
    handle: { title: 'Home' },
    errorElement: <p>Page not found</p>,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
