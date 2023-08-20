import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useLocalStorageState from 'use-local-storage-state'
import styles from './CookieNotice.module.scss'

enum CookieNoticeState {
  HIDDEN,
  INITIAL,
  WHY,
  WANTCOOKIE,
}

export const CookieNotice = () => {
  const [state, setState] = useState<CookieNoticeState>()
  const [storedState, setStoredState] = useLocalStorageState<CookieNoticeState>('cookieState', {
    defaultValue: CookieNoticeState.INITIAL,
  })

  function hideAndSave(): void {
    // we only want to save if the banner was hidden, not the "special" states
    // (might be confusing when revisiting)
    setState(CookieNoticeState.HIDDEN)
    setStoredState(CookieNoticeState.HIDDEN)
  }

  useEffect(() => {
    const storedState = localStorage.getItem('cookieState')
    if (storedState !== undefined) {
      setState(Number(storedState))
    }
  }, [storedState])

  function renderContent() {
    switch (state) {
      case CookieNoticeState.INITIAL:
        return (
          <>
            <p>No Cookies here. Happy browsing!</p>
            <div className="grid">
              <button onClick={hideAndSave}>Nice!</button>
              <button onClick={() => setState(CookieNoticeState.WHY)} className="secondary">
                Why not?
              </button>
            </div>
          </>
        )
      case CookieNoticeState.WHY:
        return (
          <>
            <p>
              I am just a simple webapp without a backend and all that jazz. So I don't need cookies to function. 😊
            </p>
            <div className="grid">
              <button onClick={() => hideAndSave}>Oh alright. Thanks!</button>
              <button onClick={() => setState(CookieNoticeState.WANTCOOKIE)} className="secondary">
                But I want a cookie!
              </button>
            </div>
          </>
        )
      case CookieNoticeState.WANTCOOKIE:
        return (
          <>
            <p>Please pick up your Cookie then.</p>
            <div className="grid">
              <Link to="/cookie-dimension" role="button" title="You asked for a cookie..." onClick={hideAndSave}>
                🍪
              </Link>
            </div>
          </>
        )
    }
  }

  return (
    <div className={styles.cookieNotice}>
      {state != CookieNoticeState.HIDDEN && <div className="container">{renderContent()}</div>}
    </div>
  )
}
