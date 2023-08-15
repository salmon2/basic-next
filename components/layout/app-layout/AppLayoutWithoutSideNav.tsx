import React from 'react';
import * as Styled from './style';

type WrapperProps = {
  children: React.ReactNode;
};
export default function AppLayout({ children }: WrapperProps) {
  return (
    <Styled.LayoutContainer>
      <Styled.PageContainer isFullWidth>{children}</Styled.PageContainer>
    </Styled.LayoutContainer>
  );
}
