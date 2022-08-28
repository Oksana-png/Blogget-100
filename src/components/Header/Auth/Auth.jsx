import propTypes from 'prop-types';
import style from './Auth.module.css';
import {ReactComponent as IconAuth} from './img/login.svg';

export const Auth = ({auth}) =>
  <button className={style.button}>
    {auth ? auth :
      <IconAuth />
    }
  </button>;

Auth.propTypes = {
  auth: propTypes.string,
};
