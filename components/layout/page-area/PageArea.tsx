import React from 'react';
import * as Styled from './style';
import { ReactNode } from 'types/child';

/*=================================================
    공통 페이지 영역 컴포넌트
=================================================*/

interface PropsType {
  size?: 'lg' | 'sm' | 'md';
  pb?: string;
  children: ReactNode;
}

const PageArea = ({ size, pb = '50px', children }: PropsType) => {
  return (
    <Styled.PageArea size={size} pb={pb}>
      {children}
    </Styled.PageArea>
  );
};

export default PageArea;
