import { Hono } from 'hono'
import { env } from 'hono/adapter'
import {
  __EXTERNAL_SECRET_KEY__,
  __EXTERNAL_SECRET_KEY__,
  external,
  external,
  setExternalSecretKey
} from './external'

type Env = {
  EXTERNAL_SECRET_KEY: string
}

const app = new Hono<{
  Bindings: Env
}>()

app.use('*', async (c, next) => {
  setExternalSecretKey(env(c).EXTERNAL_SECRET_KEY)
  await next()
})

app.get('/', (c) => {
  return c.text(__EXTERNAL_SECRET_KEY__)
})

export default app
