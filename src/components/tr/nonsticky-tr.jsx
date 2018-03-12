import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import classNames from 'classnames';
import omit from '../../utilities/omit';
import nonStickyStyles from './nonsticky-tr-styles';

function NonStickyTr({ classes, className, children, size, border, ...rest }) {
  const usedClassName = classNames(
    classes.tr,
    size,
    {
      [classes.border]: border,
    },
    className,
  );
  return (
    <tr {...omit(rest, 'sticky', 'theme', 'sheet')} className={usedClassName}>
      {children}
    </tr>
  );
}

NonStickyTr.defaultProps = {
  border: false,
};

NonStickyTr.propTypes = {
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

export default injectSheet(nonStickyStyles)(NonStickyTr);
