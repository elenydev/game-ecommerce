import React, { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import useNotification from "../hooks/useNotification"

import { theme } from "../theme/theme"
import GlobalStyle from "../theme/globalStyles"
import Notification from "../components/Notification"

const Layout = ({ children }): JSX.Element => {
  const { notificationMessage, variant, clearNotification } = useNotification()

  useEffect(() => {
    let mounted = true
    if (mounted) clearNotification()
    return () => {
      mounted = false
    }
  }, [notificationMessage])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
        {notificationMessage && (
          <>
            <Notification
              message={notificationMessage}
              variant={variant}
              shouldOpen
            />
          </>
        )}
      </ThemeProvider>
    </>
  )
}

export default Layout
