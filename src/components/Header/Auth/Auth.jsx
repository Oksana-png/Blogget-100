import {useState} from 'react';
import PropTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as IconAuth} from './img/login.svg';
import {urlAuth} from '../../../api/auth.js';
import {Text} from '../../../UI/Text';
import {useAuth} from '../../../hooks/useAuth';


export const Auth = ({token, delToken}) => {
  const [logoutOpen, setLogoutOpen] = useState(false);
  const [authData, setAuthData] = useAuth(token);
  // console.log(authData);

  return (
    <div className={style.container}>
      {authData.name ? (
        <>
          <button className={style.button} onClick={() => setLogoutOpen(!logoutOpen)}>
            <img className={style.img} src={authData.img} title={authData.name} alt={`avatar: ${authData.name}`}/>
          </button>
          {/* создаем состояние для кнопки, при клике на аватарку меняем состояние */}
          {logoutOpen && (
            <button className={style.logout} onClick={() => {
              delToken();
              setAuthData({});
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
