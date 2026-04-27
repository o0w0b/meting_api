import api from './src/service/api.js'
import { handler } from './src/template.js'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import config from './src/config.js'
import { get_runtime, get_url } from './src/util.js'
import { renderHome } from './src/view/home.js'

const app = new Hono()

app.use('*', cors())
app.use('*', logger())
app.get('/api', api)
app.get('/test', handler)
app.get('/', (c) => {
    return c.html(renderHome({
        runtime: get_runtime(),
        time: new Date().toString(),
        port: config.PORT,
        overseas: config.OVERSEAS,
        url: c.req.url,
        realUrl: get_url(c)
    }))
})

export default app
