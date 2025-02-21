import { NavLink } from 'react-router'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <NavLink to="/" className={({ isActive }) => (isActive ? '' : '')}>
          Home
        </NavLink>
      </footer>
    </>
  )
}

export default Footer
