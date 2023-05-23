import { Navbar } from '@components/index';
import { MY_USER_DATA } from '@src/constants/user';

export const Layout = ({ children, isLogin }) => {
  const contentsInlineStyles = { marginTop: isLogin ? '32px' : '0px' };
  return (
    <>
      {isLogin && <Navbar user={MY_USER_DATA}></Navbar>}
      <div style={contentsInlineStyles}>{children}</div>
    </>
  );
};
