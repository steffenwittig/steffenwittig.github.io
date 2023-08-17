import { Outlet, RouterProvider, createHashRouter } from 'react-router-dom'
import { ArtPortfolioPage } from './Pages/art/ArtPortfolioPage'
import { CookieDimension } from './Pages/CookieDimension'
import { DataPrivacyPage } from './Pages/DataPrivacyPage'
import { HomePage } from './Pages/HomePage'
import { ImpressPage } from './Pages/ImpressPage'
import { Layout } from 'Layout'
import { TechPortfolioPage } from 'Pages/tech/TechPortfolioPage'

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
        handle: { title: 'Impress' },
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
