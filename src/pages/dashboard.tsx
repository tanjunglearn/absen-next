import dynamic from 'next/dynamic'

const DynamicLayout = dynamic(() => import('@/layouts/NoAuth'))

const Dashboard = () => {
  return (
    <DynamicLayout>
      <h1>Hello Dashboard</h1>
    </DynamicLayout>
  )
}

export async function getServerSideProps(context: any) {
  // console.log(context.res.cookies)
  context.res.setHeader('set-cookie', ['absen_token=safgdfgdfg'])
  return {
    props: {}
  }
}

export default Dashboard
