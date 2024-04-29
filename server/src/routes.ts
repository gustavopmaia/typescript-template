import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'
import { prisma } from './lib/prisma'

import {
  createUser,
  deleteUser,
  getUser,
  getUserFromToken,
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
  app.post('/delete-user', { preHandler: [authMiddleware, userMiddleware] }, async (req) => deleteUser(req))
  app.post('/login', async (req, res) => loginUser(req, res))
  app.post('/user', async (req) => getUserFromToken(req))
}
