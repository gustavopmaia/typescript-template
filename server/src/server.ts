import Fastify from 'fastify'
import cors from '@fastify/cors'
import { appRoutes } from './routes'

const app = Fastify()

app.register(cors, {
  origin: true
})
app.register(appRoutes)

app.listen({ port: 3333 }, () => {
  console.log(`Server running on: http://localhost:3333`)
})
