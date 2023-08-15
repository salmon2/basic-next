import React from 'react';
type ReactText = string | number;
type ReactChild = React.ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}

export type ReactNode =
  | React.ReactNode
  | ReactChild
  | ReactNodeArray
  | React.ReactPortal
  | boolean
  | null
  | undefined;
