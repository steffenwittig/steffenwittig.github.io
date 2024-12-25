import { Layout } from 'Layout'
import { TechPortfolioPage } from 'Pages/TechPortfolio/TechPortfolioPage'
import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom'
import { ArtPortfolioPage } from './Pages/ArtPortfolio/ArtPortfolioPage'
import { HomePage } from './Pages/Home/HomePage'
import { DataPrivacyPage } from './Pages/Legal/DataPrivacyPage'
import { ImpressPage } from './Pages/Legal/ImpressPage'
import { CookieDimension } from './Pages/Misc/CookieDimension'

const router = createHashRouter([
  {
    path: '/',
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        path: '',
        element: <HomePage />,
      },
      {
        path: '/art',
        element: <ArtPortfolioPage />,
        handle: { title: 'NotSteffenWittig Art' },
      },
      {
        path: '/tech',
        element: <TechPortfolioPage />,
        handle: { title: 'Steffen Wittig Software' },
      },
      {
        path: '/impress',
        element: <ImpressPage />,
        handle: { title: 'Impress' },
      },
      {
        path: '/data-privacy',
        element: <DataPrivacyPage />,
        handle: { title: 'Data Privacy' },
      },
      {
        path: '/cookie-dimension',
        element: <CookieDimension />,
        handle: { title: 'Cookie Dimension' },
      },
    ],
    handle: { title: 'Home' },
    errorElement: (
      <Layout>
        <p>Page not found</p>
      </Layout>
    ),
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
