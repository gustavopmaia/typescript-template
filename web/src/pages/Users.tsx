import React from 'react'
import api from '../services/api'
import cookie from 'cookiejs'
import { useEffect, useState } from 'react'
import { Menu } from '../components/Menu'

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

  useEffect(() => {
    const fetchUsers = async () => {
      try {
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
      <div style={{ display: 'flex', justifyContent: 'center', height: '100vh' }}>
        <div>
          <h1>All Users</h1>
          <div style={{ display: 'flex', gap: '20px' }}>
            {users.map((user) => (
              <div
                key={user.id}
                className='user-box'
                style={{
                  backgroundColor: '#f2f2f2',
                  borderRadius: '5px',
                  padding: '10px',
                  width: '200px',
                  color: 'black',
                }}
              >
                <p style={{ fontSize: '18px', fontWeight: 'bold' }}>Name: {user.name}</p>
                <p>Email: {user.email}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Users
