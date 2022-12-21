import { onPost } from '../../axios'

const authLogin = (data: object) => {
  return new Promise(async (resolve: any) => {
    try {
      const req = await onPost('/login', data)

      resolve(req)
    } catch (error) {
      resolve(error)
    }
  })
}

export default authLogin
