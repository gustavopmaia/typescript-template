import argon2 from 'argon2'
import { prisma } from '../../lib/prisma'
import { Prisma } from '@prisma/client'

export const createUserAction = async (name: string, email: string, password: string) => {
  try {
    const password_hash = await argon2.hash(password)

    return await prisma.user.create({
      data: {
        name,
        email,
        password_hash,
      },
    })
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === 'P2002') {
        console.log('There is a unique constraint violation, a new user cannot be created with this email')
      }
    }
    throw e
  }
}

export const getUserAction = async (id: string) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  })
}

export const getUserEmailAction = async (email: string) => {
  return await prisma.user.findUnique({
    where: {
      email,
    },
  })
}

export const deleteUserAction = async (id: string) => {
  return await prisma.user.delete({
    where: {
      id,
    },
  })
}
