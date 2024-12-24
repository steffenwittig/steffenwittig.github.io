import React from 'react'
import { Breadcrumbs } from 'Components/Breadcrumbs/Breadcrumbs'
import { CookieNotice } from 'Components/CookieNotice/CookieNotice'
import { Footer } from 'Components/Footer/Footer'
import { Header } from 'Components/Header/Header'

type ILayout = {
  children: React.ReactNode
}

export const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <div>
        <Breadcrumbs />
        {children}
        <CookieNotice />
        <Footer />
      </div>
    </>
  )
}
