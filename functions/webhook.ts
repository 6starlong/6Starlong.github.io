import * as https from 'https'
import axios from 'axios'

import type { Handler } from '@netlify/functions'

export const handler: Handler = async (event: any) => {
  // Only allow POST
  if (event.httpMethod !== 'POST')
    return { statusCode: 405 }

  const { Github_Token } = process.env

  try {
    await axios({
      method: 'POST',
      url: 'https://api.github.com/repos/6starlong/6starlong.github.io/dispatches',
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token ${Github_Token}`,
        'Content-Type': 'application/json; charset=utf-8',
      },
      data: {
        event_type: 'webhook',
        client_payload: {
          unit: false,
          integration: true,
        },
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    })
  }
  catch (e) {}

  return { statusCode: 200 }
}
