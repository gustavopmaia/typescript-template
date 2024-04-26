import jwt from 'jsonwebtoken'
import { FastifyRequest, FastifyReply, FastifyInstance } from 'fastify'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const authMiddleware = async (request: FastifyRequest, reply: FastifyReply) => {
  try {
    const authorization = request.headers['authorization']
    if (!authorization) {
      reply.status(401).send({ error: 'Not authorized' })
      return
    }

    const token = authorization.replace('Bearer ', '')
    const { user_id } = jwt.verify(token, String(process.env.TOKEN_ENV)) as {
      user_id: string
    }

    const user = await prisma.user.findUnique({ where: { id: user_id } })
    if (!user) {
      reply.status(401).send({ error: 'Not authorized' })
      return
    }
    return
  } catch (error) {
    reply.status(500).send({ error: 'Internal server error' })
  }
}
