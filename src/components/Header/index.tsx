import './styles.scss';
import Logo from '../Logo';
import Socials from '../Socials';
import Navigation from '../Navigation';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo filter="drop-shadow(2px 2px 1px rgba(0,0,0,0.1))" width="" padding="1em" />
      </div>
      <Navigation color="#F2F0EB" hoverColor="#e8c328" padding="1em" />
      <Socials color="#F2F0EB" hoverColor="#e8c328" padding="1em" />

    </header>
  );
}

export default Header;
