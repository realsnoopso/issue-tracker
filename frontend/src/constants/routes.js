import { LoginPage, AuthPage, IssuePage } from '@containers/index';

export const routes = [
  { path: '/login', element: <LoginPage />, hideNavbar: true },
  { path: '/auth', element: <AuthPage />, hideNavbar: true },
  { path: '/', element: <IssuePage />, auth: true },
];
