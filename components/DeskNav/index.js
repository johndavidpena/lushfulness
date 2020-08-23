import Link from 'next/link';
import NavStyles from '../../stylesheets/Navigation.module.css';

const DeskNav = () => (
  <div>
    <div className={NavStyles.nameContainer}>
      <Link href='/'>
        <a>
          <span className={NavStyles.desktopTitle}>lushfulness
         <span aria-hidden="true" className={NavStyles.desktopPeriod}>.</span>
          </span>
        </a>
      </Link>
    </div>
  </div>
);

export default DeskNav;
