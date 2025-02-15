import { Breadcrumbs } from 'Components/Breadcrumbs/Breadcrumbs'
import { CookieNotice } from 'Components/CookieNotice/CookieNotice'
import { EMoCBot } from 'Components/EMoCBot/EMoCBot'
import { Footer } from 'Components/Footer/Footer'
import { Header } from 'Components/Header/Header'
import React from 'react'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Breadcrumbs />
      {children}
      <CookieNotice />
      <Footer />
      <EMoCBot />
    </>
  )
}
