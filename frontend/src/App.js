import { Navbar } from './components';
import { IssuePage } from '@containers/index';
import styles from './App.module.css';
import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { customFetch } from './services/api';

function App() {
  const cx = classNames.bind(styles);
  const contentsClassNames = cx('contents');

  if (process.env.NODE_ENV === 'development') {
    const { worker } = require('./mocks/browser');
    worker.start();
  }

  useEffect(() => {
    console.log('fetch 시작');
    const data = (async () =>
      await customFetch({ path: '/testApi', method: 'GET' }))();
    console.log('data', data);
  }, []);

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
