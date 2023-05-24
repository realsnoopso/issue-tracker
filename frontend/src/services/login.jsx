export const logout = (navigate) => {
  window.localStorage.removeItem('loginToken');
  navigate('/login');
};
