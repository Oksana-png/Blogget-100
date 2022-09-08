import {useState, useContext} from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as IconAuth} from './img/login.svg';
import {urlAuth} from '../../../api/auth.js';
import {Text} from '../../../UI/Text';
import {tokenContext} from '../../../context/tokenContext';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {delToken} = useContext(tokenContext);
  const [logoutOpen, setLogoutOpen] = useState(false);
  const {auth, clearAuth} = useContext(authContext);

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
              clearAuth();
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
