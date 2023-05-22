import { useLocation } from 'react-router-dom';
import { customFetch } from '@src/services/api';
import { useEffect } from 'react';

export const AuthPage = () => {
  let location = useLocation();
  const queryCode = new URLSearchParams(location.search).get('code');

  const runGetAPI = async () => {
    try {
      const data = await customFetch({
        path: '/login/github',
        method: 'GET',
        queries: { code: queryCode },
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    (async () => {
      const data = await runGetAPI();
      console.log(data);
    })();
  }, []);

  return <div>Auth</div>;
};
