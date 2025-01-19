import { Theme, useTheme } from 'Hooks/useTheme'
import { Layout } from 'Layout'
import { Comics2024Page } from 'Pages/ArtPortfolio/Comics/2024/Comics2024Page'
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
        path: '/art/comics/2024',
        element: <Comics2024Page />,
        handle: { title: 'NotSteffenWittig Comics 2024' },
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
  const [theme] = useTheme()

  return (
    <div className="app" data-theme={theme === Theme.dark ? 'dark' : 'light'}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
