import { ReactNode } from 'react'
import dynamic from 'next/dynamic'

const DynamicHeader = dynamic(() => import('./AuthHeader'))
const DynamicSidebar = dynamic(() => import('./AuthSidebar'))

type TypeProps = {
  children: ReactNode
}

const Auth = ({children}: TypeProps) => {
  return (
    <>
      <DynamicHeader />
      <section className="grid grid-cols-7 h-4/5">
        <DynamicSidebar />
        <main className="col-span-6 p-5 bg-gray-800 text-white">
          {children}
        </main>
      </section>
    </>
  )
}

export default Auth
