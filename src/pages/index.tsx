import dynamic from 'next/dynamic'

const DynamicLayout = dynamic(() => import('@/layouts/NoAuth'))
const DynamicFeature = dynamic(() => import('@/features/login/Login'))

const SingIn = () => {
  return (
    <DynamicLayout>
      <DynamicFeature />
    </DynamicLayout>
  )
}

export default SingIn
