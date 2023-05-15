import styles from './Navbar.module.css';
import classNames from 'classnames/bind';
import imagefiles from '@assets/images/index';
import { Profile } from '@components/index';

export const Navbar = ({ user = { profile: false } }) => {
  const cx = classNames.bind(styles);
  const navClassNames = cx('navbar');
  const containerClassNames = cx('container');
  const LogoComponent = imagefiles['logoType'];
  const logoHeight = 40;

  const handleLogoClick = () => {
    // routes 연결
  };

  return (
    <div className={navClassNames}>
      <div className={containerClassNames}>
        <LogoComponent
          onClick={handleLogoClick}
          height={logoHeight}
        ></LogoComponent>
        <Profile url={user.profile}></Profile>
      </div>
    </div>
  );
};
