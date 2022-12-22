import dynamic from 'next/dynamic'

const DynamicLayout = dynamic(() => import('@/layouts/auth/Auth'))
const DynamicFeature = dynamic(() => import('@/features/dashboard/Dashboard'))

const Dashboard = () => {
  return (
    <DynamicLayout>
      <DynamicFeature />
    </DynamicLayout>
  )
}

export default Dashboard
