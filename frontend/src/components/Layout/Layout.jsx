import styles from './Layout.module.css';
import classNames from 'classnames/bind';
import { Navbar } from '@components/index';
import { MY_USER_DATA } from '@src/constants/user';

const cx = classNames.bind(styles);
const contentsClassNames = cx('contents');

export const Layout = ({ children, isLogin }) => {
  return (
    <>
      {isLogin && <Navbar user={MY_USER_DATA}></Navbar>}
      <div className={contentsClassNames}>{children}</div>
    </>
  );
};
