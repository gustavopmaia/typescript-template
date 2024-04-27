import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  align-items: center;
  width: 100%;
`

export const ContainerList = styled.div`
  display: grid;
  justify-content: center;
  height: 200px;
`

export const UserBox = styled.div`
  background-color: #f2f2f2;
  border-radius: 5px;
  padding: 10px;
  width: 200px;
  height: 130px;
  color: black;
`

export const UserList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  align-items: center;
`

export const UserTitle = styled.h1`
  color: #333;
  font-size: 18px;
  font-weight: bold;
`

export const ListTitle = styled.h1`
  color: #333;
  font-size: 24px;
  color: white;
  font-weight: bold;
`
