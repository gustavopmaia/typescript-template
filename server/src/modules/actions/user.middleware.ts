import { FastifyReply, FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'
import { prisma } from '../../lib/prisma'
import z from 'zod'

export const userMiddleware = async (
  req: FastifyRequest,
  res: FastifyReply
) => {
  const getId = z.object({
    id: z.string().uuid(),
  })

  const { id } = getId.parse(req.body)

  const authorization = req.headers['authorization']
  if (!authorization) {
    res.status(401).send({ error: 'Not authorized' })
    return
  }

  const token = authorization.replace('Bearer ', '')
  const { user_id } = jwt.verify(token, String(process.env.TOKEN_ENV)) as {
    user_id: string
  }

  const user = await prisma.user.findUnique({ where: { id: user_id } })
  if (!user) {
    res.status(401).send({ error: 'Not authorized' })
    return
  }

  if (user.id !== id) {
    res.status(401).send({ error: 'Not authorized' })
    return
  }
  return
}
