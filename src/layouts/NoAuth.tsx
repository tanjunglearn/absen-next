import { ReactNode } from 'react'

type TypeProps = {
  children: ReactNode
}

const NoAuth = ({children}: TypeProps) => {
  return (
    <>
      <main>
        {children}
      </main>
    </>
  )
}

export default NoAuth
