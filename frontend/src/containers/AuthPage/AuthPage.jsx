import { useLocation, useNavigate } from 'react-router-dom';
import { getLoginToken } from '@services/login';

export const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryCode = new URLSearchParams(location.search).get('code');

  const runGetLoginTokenAPI = async () => {
    const data = await getLoginToken(queryCode);
    const token = data.token;
    window.localStorage.setItem('loginToken', token);
    navigate('/');
  };

  runGetLoginTokenAPI();

  return <></>;
};
