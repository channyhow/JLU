import "./styles.scss";
import { useLocation } from "react-router-dom";
import Logo from "../Logo";
import SwipeableTemporaryDrawer from "../Drawer";

function MobileMenu() {
  const location = useLocation();

  // Don't show the header on the landing page
  if (location.pathname === "/") {
    return null;
  }

  return (
    <div className="mobile-header">
      <SwipeableTemporaryDrawer />
      <div className="mobile-header__logo" style={{width:'25%'}}>
        <Logo />
        {/* <h1>hello</h1> */}
      </div>
    </div>
  );
}

export default MobileMenu;
