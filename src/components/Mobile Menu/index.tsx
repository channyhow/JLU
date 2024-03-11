import './styles.scss';
import { useLocation } from 'react-router-dom';
import SwipeableTemporaryDrawer from '../Drawer';

function MobileMenu() {
  const location = useLocation();

  // Don't show the header on the landing page
  if (location.pathname === '/') {
    return null;
  }

  return (
    <div className="mobile-header">
      <SwipeableTemporaryDrawer />
    </div>
  );
}

export default MobileMenu;
