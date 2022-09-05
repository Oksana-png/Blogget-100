import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as IconAuth} from './img/login.svg';
import {urlAuth} from '../../../api/auth.js';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';


export const Auth = ({token, delToken}) => {
  const [auth, setAuth] = useState('');
  const [logoutOpen, setLogoutOpen] = useState(false);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 401) {
          delToken();
        }
        setAuth({});
        // очищаем, если получили token, но он например не действительный
      });
  }, [token]);

  return (
    <div className={style.container}>
      {auth.name ? (
        <>
          <button className={style.button} onClick={() => setLogoutOpen(!logoutOpen)}>
            <img className={style.img} src={auth.img} title={auth.name} alt={`avatar: ${auth.name}`}/>
          </button>
          {/* создаем состояние для кнопки, при клике на аватарку меняем состояние */}
          {logoutOpen && (
            <button className={style.logout} onClick={() => {
              delToken();
              setAuth({});
            }} >
              Выйти
            </button>
          )}
        </>
      ) : (
        <Text className={style.authLink} As="a" href={urlAuth}>
          <IconAuth className={style.svg}/>
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
  delToken: PropTypes.func,
};
