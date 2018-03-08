import React from 'react';
import PropTypes from 'prop-types';
import NonStickyTr from './nonsticky-tr';
import StickyTr from './sticky-tr';

function Tr(props) {
  if (props.sticky) {
    return <StickyTr {...props} />;
  }

  return <NonStickyTr {...props} />;
}

Tr.defaultProps = {
  sticky: false,
};

Tr.propTypes = {
  /** @ignore */
  sticky: PropTypes.bool,
};

export default Tr;
