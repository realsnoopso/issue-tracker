import { Layout } from '@components/index';
import { IssuePage } from '@containers/index';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { LoginPage, AuthPage } from '@containers/index';

const routerBeforeLogin = createBrowserRouter([
  { path: '/auth', element: <AuthPage></AuthPage> },
  { path: '*', element: <LoginPage></LoginPage> },
]);

const router = createBrowserRouter([
  {
    path: '/',
    element: <IssuePage></IssuePage>,
  },
]);

function App() {
  // if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
  // }

  const isLogin = !!window.localStorage.getItem('loginToken');

  return (
    <div className="App">
      <Layout isLogin={isLogin}>
        <RouterProvider router={isLogin ? router : routerBeforeLogin} />
      </Layout>
    </div>
  );
}

export default App;
