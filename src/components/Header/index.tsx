import './styles.scss';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo';
import Socials from '../Socials';
import Navigation from '../Navigation';

function Header() {
  const location = useLocation();

  // Don't show the header on the landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <header className="header">
      <div className="header__logo">
        <Logo filter="drop-shadow(2px 2px 1px rgba(0,0,0,0.1))" width="" padding="1em" />
      </div>
      <Navigation color="#F2F0EB" textAlign="right" hoverColor="#e8c328" padding="1em" />
      <Socials color="#F2F0EB" hoverColor="#e8c328" padding="1em" />

    </header>
  );
}

export default Header;
