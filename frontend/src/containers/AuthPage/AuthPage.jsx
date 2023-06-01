import { useLocation, useNavigate } from 'react-router-dom';
import { getLoginToken } from '@services/login';
import { useEffect } from 'react';
import { storeContext } from '@stores/index';
import { useContext, useReducer, useState } from 'react';
import jwtDecode from 'jwt-decode';

export const AuthPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryCode = new URLSearchParams(location.search).get('code');

  const [user, userDispatch] = useContext(storeContext).user;

  const runGetLoginTokenAPI = async () => {
    try {
      const data = await getLoginToken(queryCode);

      const token = data.token;
      if (!token) throw Error('Fail to get loginToken');
      window.localStorage.setItem('loginToken', token);

      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  runGetLoginTokenAPI();

  return <></>;
};
