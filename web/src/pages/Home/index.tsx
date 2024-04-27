import { Menu } from '../../components/Menu'
import { Footer } from '../../components/Footer'
import { Box, BoxContainer, ImgContainer, ImgTitleContainer } from './style'

export const Home = () => {
  return (
    <div style={{ display: 'grid', gridTemplateRows: 'auto 1fr auto' }}>
      <Menu />
      <ImgContainer>
        <ImgTitleContainer>
          <h1>Título</h1>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,</h2>
        </ImgTitleContainer>
      </ImgContainer>
      <BoxContainer>
        <Box title='Title 1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Box>
        <Box title='Title 1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Box>
        <Box title='Title 1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Box>
        <Box title='Title 1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Box>
      </BoxContainer>
      <Footer />
    </div>
  )
}
