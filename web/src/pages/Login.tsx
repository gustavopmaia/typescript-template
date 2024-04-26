import { useState } from 'react'
import api from '../services/api'
import { InputField } from '../components/InputField'
import { Menu } from '../components/Menu'
import cookie from 'cookiejs'

export const Login = () => {
  interface user {
    email: string
    password: string
  }

  const [user, setUser]: [any, any] = useState()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(e.target.email.value)

    setUser({
      email: e.target.email.value,
      password: e.target.password.value,
    })

    login(user)
  }

  const login = async (userInfo: user) => {
    await api
      .post('/login', {
        email: userInfo.email,
        password: userInfo.password,
      })
      .then((response: { data: any }) => {
        setUser(response.data)
        // console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        location.reload()
      })
      .catch((err: any) => {
        console.log('Ocorreu um erro' + err)
      })
  }

  return (
    <div className='App'>
      <Menu />
      <form className='flex flex-col items-center justify-center' onSubmit={handleSubmit}>
        <InputField label='E-mail' type='email' id='email' name='email' />
        <InputField label='Senha' type='password' id='senha' name='password' />

        <button
          className='w-1/3 h-20 rounded transition delay-150 bg-white hover:bg-zinc-300 duration-300 text-zinc-900'
          type='submit'
        >
          ENVIAR
        </button>
      </form>
    </div>
  )
}
