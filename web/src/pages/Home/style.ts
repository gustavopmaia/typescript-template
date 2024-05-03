import styled from 'styled-components'

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('/banner.jpeg');
  height: 600px;
  font-weight: bold;
  font-size: 20px;
`

export const ImgTitleContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  padding: 20px;
  border-radius: 3px;
  text-align: center;
  width: 30%;
  color: black;
`

export const BoxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
`
