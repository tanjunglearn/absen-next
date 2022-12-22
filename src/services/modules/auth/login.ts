import { onPost } from '../../axios'

const authLogin = (data: object) => {
  return new Promise(async (resolve: any) => {
    try {
      const req = await onPost('/login', data)

      resolve({ status: true, data:req })
    } catch (error) {
      resolve({ status: false, data: error})
    }
  })
}

export default authLogin
