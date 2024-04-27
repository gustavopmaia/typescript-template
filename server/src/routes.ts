import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'
import { prisma } from './lib/prisma'

import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  loginUser,
  updateUser,
} from './modules/controllers/user.controller'

import { authMiddleware } from './modules/actions/login.middleware'
import { userMiddleware } from './modules/actions/user.middleware'

export async function appRoutes(app: FastifyInstance) {
  app.post('/users', async (req) => createUser(req))
  app.get('/users/:id', { preHandler: [authMiddleware] }, async (req) => getUser(req))
  app.get('/users', { preHandler: [authMiddleware] }, async () => getUsers())
  app.put('/users', { preHandler: [authMiddleware, userMiddleware] }, async (req) => updateUser(req))
  app.delete('/users/:id', { preHandler: [authMiddleware, userMiddleware] }, async (req) => deleteUser(req))
  app.post('/login', async (req, res) => loginUser(req, res))
}
