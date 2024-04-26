import { Link } from 'react-router-dom'

export const Menu = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: '10px',
        color: 'black',
      }}
    >
      <div>LOGO</div>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ marginRight: '10px' }}>
          <Link to='/'>Register</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}
