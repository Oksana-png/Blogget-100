import style from './Rating.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';

export const Rating = ({ups}) => (
  <Text As='div' className={style.rating}>
    <button className={style.up} aria-label='Повысить рейтинг'/>
    <p className={style.ups}>{ups}</p>
    <button className={style.down} aria-label='Понизить рейтинг'/>
  </Text>
);

Rating.propTypes = {
  ups: PropTypes.number,
};
