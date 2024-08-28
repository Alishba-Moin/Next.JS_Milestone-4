"use client"

// app/component/SessionWrapper.tsx

import { SessionProvider } from "next-auth/react"


const SessionWrapper = ({
    children,
}: {
    children: React.ReactNode;
  })  => {
  return (
    <SessionProvider>{children}</SessionProvider>
  )
}

export default SessionWrapper;