import { Navbar } from './components';
import { IssuePage } from '@containers/index';
import styles from './App.module.css';
import classNames from 'classnames/bind';
import { customFetch } from './services/api';
import { useEffect } from 'react';
import { URL } from '@constants/api';

function App() {
  const cx = classNames.bind(styles);
  const contentsClassNames = cx('contents');

  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    worker.start();
  }

  const test = async () => {
    const data = await customFetch({ path: '/members', method: 'GET' });
    // console.log(data);
  };
  test();

  return (
    <div className="App">
      <Navbar></Navbar>
      <div className={contentsClassNames}>
        <IssuePage></IssuePage>
      </div>
    </div>
  );
}

export default App;
