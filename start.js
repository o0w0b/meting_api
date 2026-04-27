import { serve } from '@hono/node-server'

import app from './app.js'
import config from './src/config.js'

const port = config.PORT

serve({
    fetch: app.fetch,
    port
})

console.info(`🚀 HTTP server started on http://localhost:${port}`)