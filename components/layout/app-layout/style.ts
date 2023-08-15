import { css, theme, styled } from 'twin.macro';

export const LayoutContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  min-width: ${theme`variables.min-width`};
  max-width: ${theme`variables.max-width`};
  margin: 0 auto;
  background-color: ${theme`colors.sub_FFFFFF`};
`;

export const PageContainer = styled.div`
  ${({ isFullWidth }: { isFullWidth: boolean }) =>
    css`
      width: 100%;
      min-height: 100vh;
      padding-left: ${isFullWidth ? 0 : theme`variables.side-navigation-width`};
    `}
`;
