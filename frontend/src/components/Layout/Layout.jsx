import { Navbar } from '@components/index';
import { MY_USER_DATA } from '@src/constants/user';
import { Outlet } from 'react-router-dom';

export const Layout = ({ children, hideNavbar }) => {
  const contentsInlineStyles = { marginTop: hideNavbar ? '0px' : '32px' };

  return (
    <>
      {!hideNavbar && <Navbar user={MY_USER_DATA}></Navbar>}
      <div style={contentsInlineStyles}>{children}</div>
    </>
  );
};
