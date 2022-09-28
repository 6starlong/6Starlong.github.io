export async function handler(event) {
  const name = event.queryStringParameters.name || 'World'

  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello ${name}` }),
  }
}
