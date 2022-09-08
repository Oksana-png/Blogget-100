import {useState, useEffect, useContext} from 'react';
import {URL_API} from '../api/const';
import {tokenContext} from '../context/tokenContext';

export const usePopular = () => {
  const [popularPosts, setPopularPosts] = useState();
  const {token} = useContext(tokenContext);

  useEffect(() => {
    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        console.log(data.data.children);
        setPopularPosts([...data.data.children]);
      })
      .catch((err) => console.log(err));
  }, []);

  return [popularPosts, setPopularPosts];
};
