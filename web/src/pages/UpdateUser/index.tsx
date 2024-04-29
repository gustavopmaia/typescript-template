import { useState, useEffect } from 'react'
import api from '../../services/api'
import { InputField } from '../../components/InputField'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { ErrorTitle } from './style'

export const Update = () => {
  interface user {
    id: string
    name: string
    email: string
  }

  const [user, setUser]: [any, any] = useState()
  const [newUserInfo, setNewUserInfo]: [any, any] = useState()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const name = e.target.name.value
    const email = e.target.email.value

    setNewUserInfo({
      id: user.id,
      name: name,
      email: email,
    })

    updateUser(newUserInfo)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      console.log('No token found in local storage')
      return
    }

    api
      .post('/user', { token })
      .then((response) => {
        if (!response.data) {
          console.log('No user data returned from API')
          return
        }

        setUser(response.data)
      })
      .catch((err: any) => {
        console.log('An error occurred: ' + err)
      })
  }, [])

  let config = { headers: { Authorization: 'Bearer ' + localStorage.getItem('token') } }

  const updateUser = (userInfo: user) => {
    api.put(`/users`, userInfo, config).then((response) => {
      setNewUserInfo(response.data)
      alert(`Usuario ${userInfo.name} atualizado!`)
      location.reload()
    })
  }

  return (
    <div className='App'>
      <Menu />
      <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
        {user ? (
          <InputField
            label='Nome'
            type='text'
            id='name'
            name='name'
            value={user.name}
            onChange={(e: any) => setUser({ ...user, name: e.target.value })}
          />
        ) : (
          <ErrorTitle>Usuario nao encontrado</ErrorTitle>
        )}
        {user && (
          <InputField
            label='E-mail'
            type='email'
            id='email'
            name='email'
            value={user.email}
            onChange={(e: any) => setUser({ ...user, email: e.target.value })}
          />
        )}

        {user && (
          <button
            className='w-1/3 h-20 rounded transition delay-150 bg-white hover:bg-zinc-300 duration-300 text-zinc-900'
            type='submit'
          >
            ATUALIZAR
          </button>
        )}
      </form>
      <Footer />
    </div>
  )
}
