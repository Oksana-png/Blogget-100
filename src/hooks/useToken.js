import {useState, useEffect} from 'react';

export const useToken = (state) => {
  const [token, setToken] = useState(state);

  useEffect(() => {
    if (location.pathname.includes('/auth')) {
      const token = new URLSearchParams(location.hash.substring(1))
        .get('access_token');
      setToken(token);
    }

    // если в localStorage есть token, то обновляем состояние token,
    // будем авторизованы, т.к. состояние обновится
    if (localStorage.getItem('bearer')) {
      setToken(localStorage.getItem('bearer'));
    }
  }, []);

  useEffect(() => {
    if (token) {
      localStorage.setItem('bearer', token);
    }
  }, [token]);

  const delToken = () => {
    setToken('');
    localStorage.removeItem('bearer');
  };

  return [token, delToken];
};
