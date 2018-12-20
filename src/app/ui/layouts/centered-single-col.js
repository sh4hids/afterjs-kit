import React from 'react';
import { CenteredContainer } from '../kits/core';

const CenteredSingleCol = props => {
  return (
    <CenteredContainer width={props.width}>{props.children}</CenteredContainer>
  );
};

export default CenteredSingleCol;
