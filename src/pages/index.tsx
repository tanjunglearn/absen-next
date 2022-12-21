import dynamic from 'next/dynamic'

const DynamicLayout = dynamic(() => import('@/layouts/NoAuth'))

const DynamicComponent = dynamic(() => import('@/components/login/Login'))

const SingIn = () => {
  return (
    <DynamicLayout>
      <DynamicComponent />
    </DynamicLayout>
  )
}

export default SingIn
