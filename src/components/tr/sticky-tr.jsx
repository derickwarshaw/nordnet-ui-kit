import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import omit from '../../utilities/omit';
import stickyStyles from './sticky-tr-styles';

function StickyTr({ classes, className, children, size, border, sticky, stickyBorder, stickyOffset, ...rest }) {
  const usedClassName = classNames(
    classes.tr,
    size,
    {
      [classes.border]: border,
      [classes.sticky]: sticky,
      [classes.stickyBorder]: stickyBorder,
    },
    className,
  );
  return (
    <tr {...omit(rest, 'sticky', 'theme', 'sheet')} className={usedClassName}>
      {children}
    </tr>
  );
}

StickyTr.defaultProps = {
  border: false,
  sticky: false,
  stickyBorder: false,
  stickyOffset: 0,
};

StickyTr.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  border: PropTypes.bool,
  sticky: PropTypes.bool,
  stickyBorder: PropTypes.bool,
  stickyOffset: PropTypes.number,
};

export default injectSheet(stickyStyles)(StickyTr);
