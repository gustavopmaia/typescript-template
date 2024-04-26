import { FastifyReply, FastifyRequest } from 'fastify'
import z from 'zod'
import argon2 from 'argon2'
import { prisma } from '../../lib/prisma'
import jwt from 'jsonwebtoken'

import {
  createUserAction,
  getUserAction,
  deleteUserAction,
} from '../actions/user.action'

export const createUser = async (req: FastifyRequest) => {
  const createUserObject = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string(),
  })

  const { name, email, password } = createUserObject.parse(req.body)

  return createUserAction(name, email, password)
}

export const getUser = async (req: FastifyRequest) => {
  const getUserObject = z.object({
    id: z.string().uuid(),
  })

  const { id } = getUserObject.parse(req.params)

  return getUserAction(id)
}

export const getUsers = async () => {
  return await prisma.user.findMany()
}

export const updateUser = async (req: FastifyRequest) => {
  const updateUserObject = z.object({
    id: z.string().uuid(),
    name: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
  })
  const { id, name, email, password } = updateUserObject.parse(req.body)

  const password_hash = await argon2.hash(String(password))

  return await prisma.user.update({
    where: {
      id,
    },
    data: {
      name,
      email,
      password_hash,
    },
  })
}

export const deleteUser = async (req: FastifyRequest) => {
  const deleteUserObject = z.object({
    id: z.string().uuid(),
  })

  const { id } = deleteUserObject.parse(req.body)

  return deleteUserAction(id)
}

export const loginUser = async (req: FastifyRequest, res: FastifyReply) => {
  const loginUserObject = z.object({
    email: z.string(),
    password: z.string().min(6, 'The password needs to be 6 characters'),
  })

  const { email, password } = loginUserObject.parse(req.body)

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      res.code(401).send({ error: 'Incorrect email or password' })
      return
    }

    const isPasswordValid = await argon2.verify(user.password_hash, password)
    if (!isPasswordValid) {
      res.code(401).send({ error: 'Incorrect email or password' })
    }

    const token = jwt.sign({ user_id: user.id }, String(process.env.TOKEN_ENV))

    res.send({ token })
  } catch {}
}
