import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import { appRouter } from './router'

export default {
  port: 5000,
  async fetch(request: Request) {
    if (request.method === 'OPTIONS') return new Response(undefined, {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
      }
  })

    const response = await fetchRequestHandler({
      router: appRouter,
      endpoint: '',
      req: request
    })

    response.headers.set('Access-Control-Allow-Origin', '*')

    return response
  },
}
