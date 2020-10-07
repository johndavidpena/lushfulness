import { useRef } from 'react';
import Link from '../Link';
import Burger from '../Burger';
import SideMenu from '../SideMenu';
import { useOnClickOutside } from '../../hooks/burgerHook';
import NavStyles from '../../stylesheets/Navigation.module.css';

const Header = ({ open, setOpen }) => {
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <nav className={NavStyles.nav}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <SideMenu open={open} setOpen={setOpen} />
      </div>

      <div className={NavStyles.titleContainer}>
        <Link href='/'>
          <a>
            <span className={NavStyles.title}>Lushfulness
              <span aria-hidden="true" className={NavStyles.period}>.</span>
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Header;