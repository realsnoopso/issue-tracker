import { Navbar } from './components';
import { IssuePage } from '@containers/index';
import styles from './App.module.css';
import classNames from 'classnames/bind';
import { MY_USER_DATA } from '@src/constants/user';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage, AuthPage } from '@containers/index';

// Todo : 로그인 조건 추가
const router = createBrowserRouter([
  {
    path: '/',
    element: <IssuePage></IssuePage>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/auth',
    element: <AuthPage></AuthPage>,
  },
]);

function App() {
  const cx = classNames.bind(styles);
  const contentsClassNames = cx('contents');

  // if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
  // }

  return (
    <div className="App">
      <Navbar user={MY_USER_DATA}></Navbar>
      <div className={contentsClassNames}>
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
