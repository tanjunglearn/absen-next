import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import authLogin from '@/services/modules/auth/login'
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button
} from '@material-tailwind/react'

const Login = () => {
  const router = useRouter()
  const [fdUsername, setFdUsername] = useState('')
  const [fdPassword, setFdPassword] = useState('')

  // group: action
  const onSubmit = async (e: any) => {
    e.preventDefault()

    const send: any = await authLogin({
      username: fdUsername,
      password: fdPassword
    })

    if (send.status) {
      setCookie('absen_token', send.data.data.token)
      router.push('/dashboard')
    }
  }

  return (
    <section className='flex justify-center items-center h-screen w-screen bg-gray-400'>
      <form onSubmit={onSubmit}>
        <Card className="w-96">
          <CardBody className="flex flex-col gap-4">
            <div id="box:title">
              <Typography as="h1" className="text-center">
                Absen Sing In
              </Typography>
            </div>
            <div id="box:fields">
              <div id="field:username">
                <Input
                  label="Username"
                  value={fdUsername}
                  size="lg"
                  required
                  onChange={(e) => setFdUsername(e.currentTarget.value)}
                />
              </div>
              <div id="field:password" className="mt-4">
                <Input
                  label="Password"
                  value={fdPassword}
                  size="lg"
                  required
                  type="password"
                  onChange={(e) => setFdPassword(e.currentTarget.value)}
                />
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <div id="box:button">
              <Button type="submit" variant="gradient" fullWidth>
                Sign In
              </Button>
            </div>
            <div id="box:singup">
              <Typography variant="small" className="mt-6 flex justify-center">
                Don't have an account?
                <Typography
                  as="a"
                  href="#signup"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Typography>
            </div>
          </CardFooter>
        </Card>
      </form>
    </section>
  )
}

export default Login
