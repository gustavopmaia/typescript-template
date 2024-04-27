import { useState } from 'react'
import api from '../../services/api'
import { InputField } from '../../components/InputField'
import { Menu } from '../../components/Menu'

export const Register = () => {
  interface user {
    name: string
    email: string
    password: string
  }

  const [user, setUser]: [any, any] = useState()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    console.log(e.target.email.value)

    setUser({
      name: e.target.nome.value,
      email: e.target.email.value,
      password: e.target.password.value,
    })

    createUser(user)
  }

  const createUser = async (userInfo: user) => {
    await api
      .post('/users', {
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password,
      })
      .then((response: { data: any }) => {
        setUser(response.data)
        alert(`Usuario ${userInfo.name} criado!`)
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
        <InputField label='Nome' type='text' id='nome' name='nome' />
        <InputField label='E-mail' type='email' id='email' name='email' />
        <InputField label='Senha' type='password' id='senha' name='password' />

        <button
          className='w-1/3 h-20 rounded transition delay-150 bg-white hover:bg-zinc-300 duration-300 text-zinc-900'
          type='submit'
        >
          ENVIAR
        </button>

        <h1>{user?.name}</h1>
      </form>
    </div>
  )
}
