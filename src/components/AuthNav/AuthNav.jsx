import { Nav, Link } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Nav>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </Nav>
  );
}
