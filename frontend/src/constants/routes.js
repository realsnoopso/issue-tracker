import {
  LoginPage,
  AuthPage,
  IssuePage,
  ErrorPage,
  IssueDetail,
  WritePage,
} from '@containers/index';

export const routes = [
  { path: '/login', element: <LoginPage />, hideNavbar: true },
  { path: '/auth', element: <AuthPage />, hideNavbar: true },
  { path: '/', element: <IssuePage />, auth: true },
  { path: '*', element: <ErrorPage /> },
  {
    path: '/detail/:issueId',
    element: <IssueDetail />,
    auth: true,
  },
  { path: '/write', element: <WritePage /> },
];
