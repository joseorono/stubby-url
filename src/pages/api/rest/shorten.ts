
import type { NextApiRequest, NextApiResponse } from 'next'

import { getNanoId } from '~/lib/utils'

type ResponseData = {
    message: string,
    shortCode: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
    res.status(200).json({
        message: 'Hello from Next.js!',
        shortCode: getNanoId()
    })
}

