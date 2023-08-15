import React from 'react';

import * as Styled from './style';
import { theme } from 'twin.macro';
import { useMemo } from 'react';

type WrapperProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: WrapperProps) {
  return (
    <>
      <Styled.LayoutContainer>
        <Styled.PageContainer>{children}</Styled.PageContainer>
      </Styled.LayoutContainer>
    </>
  );
}
