import React from 'react'
import api from '../../services/api'
import cookie from 'cookiejs'
import { useEffect, useState } from 'react'
import { Menu } from '../../components/Menu'
import { Container, UserBox, UserList } from './style'

interface User {
  id: number
  name: string
  email: string
}

const Users = () => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token'),
    },
  }

  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        if (!config.headers.Authorization) {
          setError('Token not found. Please log in.')
          return
        }

        const response = await api.get('/users', config)
        setUsers(response.data)
      } catch (error) {
        console.error('Error fetching users:', error)
      }
    }

    fetchUsers()
  }, [])

  return (
    <>
      <Menu />
      <Container>
        <h1>All Users</h1>
        {error && <p>{error}</p>}
        <UserList>
          {users.map((user) => (
            <UserBox key={user.id}>
              <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Name: {user.name}</p>
              <p>Email: {user.email}</p>
            </UserBox>
          ))}
        </UserList>
      </Container>
    </>
  )
}

export default Users
