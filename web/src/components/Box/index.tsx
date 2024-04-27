import { Box as StyledBox } from './styles'

interface BoxProps {
  children: string
  title: string
}

export const Box = ({ title, children }: BoxProps) => {
  return (
    <StyledBox>
      <h3>{title}</h3>
      <p>{children}</p>
    </StyledBox>
  )
}
