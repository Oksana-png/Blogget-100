import classNames from 'classnames';
import style from './Text.module.css';
import PropTypes from 'prop-types';

export const Text = prop => {
  const {
    As = 'span',
    color = 'black',
    size,
    tsize,
    dsize,
    className,
    children,
    href,
    center,
    key,
    onClick,
    fw,
  } = prop;

  const classes = classNames(
    className,
    style[color],
    {[style.center]: center},
    {[style[`fs${size}`]]: size},
    // Объект, внутри - что мы хотим вставить
    {[style[`fst${tsize}`]]: tsize},
    // если передан tsize, то стиль будет добавляться
    {[style[`fsd${dsize}`]]: dsize},
    {[style[`${fw}`]]: fw},
  );

  return <As className={classes} href={href} key={key} onClick={onClick}>{children}</As>;
};


Text.propTypes = {
  As: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  tsize: PropTypes.number,
  dsize: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
  href: PropTypes.string,
  center: PropTypes.bool,
};
