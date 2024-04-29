import { useState, useEffect } from 'react'
import api from '../../services/api'
import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import * as S from './style'
// import Box from '@mui/material/Box'
// import Modal from '@mui/material/Modal'
// import Button from '@mui/material/Button'
import { Button, Modal, Box } from '@mui/material'

export const Delete = () => {
  interface user {
    id: string
    name: string
  }

  const [user, setUser]: [any, any] = useState()

  const handleSubmit = (e: any) => {
    e.preventDefault()

    deleteUser(user)
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

  const deleteUser = (userInfo: user) => {
    api.post(`/delete-user`, { id: userInfo.id }, config).then((response) => {
      alert(`Usuario ${userInfo.name} deletado!`)
      location.reload()
    })
  }

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    color: 'black',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  }

  return (
    <div className='App'>
      <Menu />
      <S.Container>
        {user ? <S.Title>{user.name}</S.Title> : <S.ErrorTitle>Usuario nao encontrado</S.ErrorTitle>}

        {user && (
          <button
            className='w-1/3 h-20 rounded transition delay-150 bg-red-600 mt-6 hover:bg-zinc-300 duration-300 text-zinc-900'
            type='submit'
            onClick={handleOpen}
          >
            DELETAR USUARIO
          </button>
        )}
        <Modal open={open} onClose={handleClose}>
          <Box sx={style}>
            <h2>Deletar Usuario</h2>
            <p>Tem certeza que deseja deletar o usuario?</p>
            <button
              className='rounded transition delay-150 mt-6 duration-300 text-blue-500 p-3 ml-3'
              type='submit'
              onClick={handleClose}
            >
              Cancelar
            </button>
            <button
              className='rounded transition delay-150 bg-red-600 mt-6 hover:bg-zinc-300 duration-300 text-zinc-900 p-3 ml-3'
              type='submit'
              onClick={handleSubmit}
            >
              DELETAR USUARIO
            </button>
          </Box>
        </Modal>
      </S.Container>
      <Footer />
    </div>
  )
}
