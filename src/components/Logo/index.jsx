import React from 'react';
import classes from '../Logo';

function Logo() {
  return (
    <div className={classes.logo}>
      <span className={classes.logoCapital}>Q</span>uiz
      <span className={classes.logoEnd}>App</span>
    </div>
  );
}

export default Logo;
