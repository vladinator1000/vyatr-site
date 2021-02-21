const fetch = require('node-fetch')
const cookie = require('cookie')

const CONVERTKIT_BASE_URL = 'https://api.convertkit.com/v3'
const CONVERTKIT_FORM_ID = process.env.CONVERTKIT_FORM_ID

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 404,
      body: 'not found',
    }
  }

  const { email } = JSON.parse(event.body)

  const response = await fetch(`${CONVERTKIT_BASE_URL}/forms/${CONVERTKIT_FORM_ID}/subscribe`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      api_key: process.env.CONVERTKIT_API_PUBLIC,
    }),
  }).catch((error) => {
    console.error(error)
  })

  if (!response.ok) {
    console.log(response)
    return {
      statusCode: 200,
      body: JSON.stringify({ error: 'something went wrong' }),
    }
  }

  const data = await response.json()

  const subCookie = cookie.serialize(
    'CONVERTKIT_subscriber_id',
    data.subscription.subscriber.id,
    {
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
      path: '/',
      maxAge: 3600000 * 24 * 365, // one year
    },
  )

  return {
    statusCode: 200,
    headers: {
      'Set-Cookie': subCookie,
    },
    body: JSON.stringify(data),
  }
}
