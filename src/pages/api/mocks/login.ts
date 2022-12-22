// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import jwt from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

type TypeData = {
  code?: string
  message?: string
  username?: string
  token?: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TypeData>
) {
  if (req.method !== 'POST') {
    res.status(400).json({
      code: '6901',
      message: 'Method is wrong!'
    })
  } else {
    const setData = {
      id: '1',
      username: req.body.username,
      role: 'admin'
    }
    const setToken = jwt.sign(setData, 'absen')

    res.status(200).json({
      username: req.body.username,
      token: setToken
    })
  }
}
