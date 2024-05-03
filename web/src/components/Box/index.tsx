import { Box as StyledBox, TitleBox } from './styles'

interface BoxProps {
  children: string
  title: string
}

export const Box = ({ title, children }: BoxProps) => {
  return (
    <StyledBox>
      <TitleBox>{title}</TitleBox>
      <p>{children}</p>
    </StyledBox>
  )
}
