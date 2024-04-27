import { Link } from 'react-router-dom'
import { Logo, Navbar, List, ListItem } from './styles'

export const Menu = () => {
  return (
    <Navbar>
      <Logo>
        <Link to='/'>LOGO</Link>
      </Logo>
      <List>
        <ListItem>
          <Link to='/register'>Register</Link>
        </ListItem>
        <ListItem>
          <Link to='/login'>Login</Link>
        </ListItem>
        <ListItem>
          <Link to='/users'>Users</Link>
        </ListItem>
      </List>
    </Navbar>
  )
}
