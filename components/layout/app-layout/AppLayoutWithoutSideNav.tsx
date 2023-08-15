import React from 'react';
import * as Styled from './style';
import { ReactNode } from 'types/child';

type WrapperProps = {
  children: ReactNode;
};
export default function AppLayout({ children }: WrapperProps) {
  return (
    <Styled.LayoutContainer>
      <Styled.PageContainer>{children}</Styled.PageContainer>
    </Styled.LayoutContainer>
  );
}
