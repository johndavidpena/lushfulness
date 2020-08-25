// import Link from 'next/link';
import Link from '../Link';
import SideMenuStyles from '../../stylesheets/SideMenu.module.css';

const Menu = ({ open, setOpen }) => {
  const openStyle = {
    transform: 'translateX(0)'
  }

  const closedStyle = {
    transform: 'translateX(-100%)'
  }
  return (
    <div open={open}
      className={SideMenuStyles.menu}
      style={open ? openStyle : closedStyle}
    >
      <Link href='/'>
        <a onClick={() => setOpen(!open)}>Home</a>
      </Link>

      <Link href='/blog'>
        <a onClick={() => setOpen(!open)}>Blog</a>
      </Link>
    </div>
  );
}

export default Menu;
