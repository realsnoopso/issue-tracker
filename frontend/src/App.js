import { Layout } from '@components/index';
import {
  Routes,
  Route,
  Navigate,
  BrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { routes } from '@constants/routes';
import { getToken } from '@services/login';
import { storeContext } from '@stores/index';
import { initialState, reducer } from '@stores/user';
import { StoreProvider } from '@stores/StoreProvider';
import { useContext, useReducer, useState } from 'react';
import jwtDecode from 'jwt-decode';

const RequireAuth = ({ children }) => {
  const token = getToken();

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

function App() {
  // if (process.env.NODE_ENV === 'development') {
  //   const { worker } = require('./mocks/browser');
  //   worker.start();
  // }

  return (
    <div className="App">
      <StoreProvider>
        <BrowserRouter>
          <Routes>
            {routes.map((route) => {
              const { path, element, auth, hideNavbar } = route;
              return (
                <Route
                  key={path}
                  path={path}
                  element={
                    <Layout hideNavbar={hideNavbar}>
                      {auth ? <RequireAuth>{element}</RequireAuth> : element}
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </StoreProvider>
    </div>
  );
}

export default App;
