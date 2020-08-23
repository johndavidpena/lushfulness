import { useRef } from 'react';
import Link from 'next/link';
import Burger from '../Burger';
import SideMenu from '../SideMenu';
import { useOnClickOutside } from '../../hooks/burgerHook';
import NavStyles from '../../stylesheets/Navigation.module.css';

const Header = ({ open, setOpen }) => {
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <nav className={NavStyles.burger}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <SideMenu open={open} setOpen={setOpen} />
      </div>

      <div className={NavStyles.nameContainer}>
        <Link href='/'>
          <a>
            <span className={NavStyles.mobileTitle}>lushfulness
              <span aria-hidden="true" className={NavStyles.mobilePeriod}>.</span>
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Header;