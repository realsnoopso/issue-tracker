export const logout = (navigate) => {
  window.localStorage.removeItem('loginToken');
  navigate('/login');
};

const checkIsLengthValid = (input, min, max) => {
  const length = input.length;
  return length >= min && length <= max;
};

export const checkIdValidation = (id) => {
  const MIN = 6;
  const MAX = 16;
  return checkIsLengthValid(id, MIN, MAX);
};

export const checkPasswordValidation = () => {
  const MIN = 6;
  const MAX = 12;
  return checkIsLengthValid(id, MIN, MAX);
};

export const getToken = () => {
  return window.localStorage.getItem('loginToken');
};
