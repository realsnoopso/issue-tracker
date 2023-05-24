import styles from './Navbar.module.css';
import classNames from 'classnames/bind';
import imagefiles from '@assets/images/index';
import { Dropdown, Profile } from '@components/index';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { logout } from '@services/login';

export const Navbar = ({ user = { profile: false } }) => {
  const navigate = useNavigate();
  const cx = classNames.bind(styles);
  const navClassNames = cx('navbar');
  const containerClassNames = cx('container');
  const LogoComponent = imagefiles['logoType'];
  const logoHeight = 40;

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  };

  const handleProfileOptionClick = () => {
    logout(navigate);
  };

  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className={navClassNames}>
      <div className={containerClassNames}>
        <LogoComponent
          onClick={handleLogoClick}
          height={logoHeight}
        ></LogoComponent>

        <Dropdown
          btnComponent={<Profile url={user.profile}></Profile>}
          options={[{ index: 0, contents: '로그아웃' }]}
          toggleOpen={handleProfileOpen}
          isOpen={profileOpen}
          optionOnClick={handleProfileOptionClick}
        ></Dropdown>
      </div>
    </div>
  );
};