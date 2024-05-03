import { ContainerFooter } from './styles'

type FooterProps = {
  fixed?: boolean
}

export const Footer = ({ fixed }: FooterProps) => {
  return (
    <ContainerFooter style={{ position: fixed ? 'fixed' : 'static', bottom: fixed ? '0' : 'none' }}>
      <div style={{ color: 'black' }}>
        <p>Feito por Gustavo Maia</p>
      </div>
    </ContainerFooter>
  )
}
