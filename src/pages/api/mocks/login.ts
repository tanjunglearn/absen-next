// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Error = {
  code: string
  message: string
}

type Data = {
  username: string
  token: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Error|Data>
) {
  if (req.method !== 'POST') {
    res.status(400).json({
      code: '6901',
      message: 'Method is wrong!'
    })
  } else {
    res.status(200).json({
      username: 'Nanti username',
      token: 'Nanti token'
    })
  }
}
