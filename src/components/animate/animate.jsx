import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import cn from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import easings from '../../styles/transitions/easings';
import durations from '../../styles/transitions/durations';

const initialHeight = {
  height: () => 0,
  maxHeight: () => 0,
};

const styles = {
  height: {
    boxSizing: 'border-box',
    transitionProperty: 'max-height, height',
  },
  heightEnter: initialHeight,
  heightEnterActive: {
    height: props => props.estimatedHeight,
    maxHeight: props => props.estimatedHeight,
    transitionTimingFunction: props => props.easingEnterFunction,
    transitionDuration: props => props.enterTime,
    overflow: 'hidden',
  },
  heightExit: {
    height: props => props.estimatedHeight,
    maxHeight: props => props.estimatedHeight,
    transitionTimingFunction: props => props.easingLeaveFunction,
    transitionDuration: props => props.leaveTime,
    overflow: 'hidden',
  },
  heightExitActive: initialHeight,
};

const items = (children, classNameProp, classNames, timeout) =>
  children.map(child => (
    <CSSTransition key={child.key} className={classNameProp} classNames={classNames} timeout={timeout}>
      <div>{child}</div>
    </CSSTransition>
  ));

function Animate({
  classes,
  className,
  children,
  type,
  enterTime,
  leaveTime /* easingEnterFunction, easingLeaveFunction, estimatedHeight */,
}) {
  const classNameProp = cn(classes[type], className);
  const classNames = {
    enter: classes[`${type}Enter`],
    enterActive: classes[`${type}EnterActive`],
    exit: classes[`${type}Exit`],
    exitActive: classes[`${type}ExitActive`],
  };
  const timeout = { enter: enterTime, exit: leaveTime };

  return <TransitionGroup>{items(React.Children.toArray(children), classNameProp, classNames, timeout)}</TransitionGroup>;
}

Animate.propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  /** This needs to be set in order for the component to render anything */
  type: PropTypes.oneOf(['height']).isRequired,
  enterTime: PropTypes.number,
  leaveTime: PropTypes.number,
  easingEnterFunction: PropTypes.string, // eslint-disable-line
  easingLeaveFunction: PropTypes.string, // eslint-disable-line
  estimatedHeight: PropTypes.number, // eslint-disable-line
};

Animate.defaultProps = {
  type: 'height',
  enterTime: durations.shorter,
  leaveTime: durations.shorter,
  easingEnterFunction: easings.easeIn,
  easingLeaveFunction: easings.easeOut,
  estimatedHeight: 500,
};

export { Animate as Component, styles };
export default injectSheet(styles)(Animate);
