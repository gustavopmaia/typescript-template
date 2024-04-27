import { Link } from 'react-router-dom'
import { Logo, Navbar, List, ListItem } from './styles'

export const Menu = () => {
  return (
    <Navbar>
      <Logo>LOGO</Logo>
      <List>
        <ListItem>
          <Link to='/'>Register</Link>
        </ListItem>
        <ListItem>
          <Link to='/login'>Login</Link>
        </ListItem>
      </List>
    </Navbar>
  )
}
