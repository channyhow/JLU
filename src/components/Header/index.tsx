import "./styles.scss";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";
import Socials from "../Socials";
import Navigation from "../Navigation";

function Header() {
  const location = useLocation();

  

  // Don't show the header on the landing page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <header className="header">
      <div className="header__container" >
        <div className="header__logo"
                style={{paddingBottom:'1.5em'}}
>
          <Logo scale={"1"} />
        </div>
        <Socials color={"#2a601f"} hoverColor={"#e8c328"} />
        <Navigation color={"#2a601f"} textAlign={"right"} hoverColor={"#e8c328"} />
      </div>
    </header>
  );
}

export default Header;
