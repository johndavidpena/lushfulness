// import Link from 'next/link';
import Link from '../Link';
import NavStyles from '../../stylesheets/Navigation.module.css';

const DeskNav = () => (
  <div className={NavStyles.nameContainer}>
    <Link href='/blog'>
      <a>
        <span className={NavStyles.desktopTitle}>blog</span>
      </a>
    </Link>

    <Link href='/'>
      <a>
        <span className={NavStyles.desktopTitle}>lushfulness
         <span aria-hidden="true" className={NavStyles.desktopPeriod}>.</span>
        </span>
      </a>
    </Link>
  </div>
);

export default DeskNav;
