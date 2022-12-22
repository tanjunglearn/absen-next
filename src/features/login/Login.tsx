import { useState } from 'react'
import authLogin from "@/services/modules/auth/login"

const Login = () => {
  // group: state
  const [fdUsername, setFdUsername] = useState('')
  const [fdPassword, setFdPassword] = useState('')

  // group: action
  const onSubmit = async (e: any) => {
    e.preventDefault()

    const send = await authLogin({
      username: fdUsername,
      password: fdPassword
    })

    console.log('anu', send)
  }

  return (
    <section className="flex justify-center items-center h-screen w-screen">
      <div className="w-80 bg-blue-100 p-5 rounded-md">
        <form onSubmit={onSubmit}>
          <div id="box:fields">
            <div id="field:username">
              <div>
                <label>Username</label>
              </div>
              <div className="mt-2">
                <input
                  value={fdUsername}
                  placeholder="Type username here..."
                  className="w-full p-3 rounded-md"
                  onChange={(e) => setFdUsername(e.currentTarget.value)}
                />
              </div>
            </div>
            <div id="field:password" className="mt-4">
              <div>
                <label>Password</label>
              </div>
              <div className="mt-2">
                <input
                  value={fdPassword}
                  placeholder="Type password here..."
                  className="w-full p-3 rounded-md"
                  onChange={(e) => setFdPassword(e.currentTarget.value)}
                />
              </div>
            </div>
          </div>
          <div id="box:button" className="mt-8">
            <button type="submit" className="w-full">
              Login
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Login
