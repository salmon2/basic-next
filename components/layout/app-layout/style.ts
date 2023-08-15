import { css, theme, styled } from 'twin.macro';

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  min-width: ${theme`variables.min-width`};
  max-width: ${theme`variables.max-width`};
  margin: 0 auto;
  background-color: ${theme`colors.bg_EEF2FD`};
`;

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;

  background-color: ${theme`colors.bg_F5F5F5`};
`;
