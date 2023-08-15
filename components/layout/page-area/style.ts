import { theme, styled, css } from 'twin.macro';

/**
 * 공통 패딩 값 (한쪽 기준)
 */
const oneSidePadding = 30; //px

/**
 * 페이지 영역 기본 스타일
 */
export const pageAreaBaseStyle = css`
  margin: 0 auto;
  padding: 0 ${oneSidePadding}px;
`;

/**
 * 페이지 영역의 최대너비
 */
export const sizeStyles: any = {
  sm: css`
    max-width: ${theme`containerSize.sm` + oneSidePadding * 2}px;
  `,
  md: css`
    max-width: ${theme`containerSize.md` + oneSidePadding * 2}px;
  `,
  lg: css`
    max-width: ${theme`containerSize.lg` + oneSidePadding * 2}px;
  `,
};

export const PageArea = styled.div<any>`
  /* base style */
  ${pageAreaBaseStyle}
  /* size Style */
  ${({ size }: { size: string }): any => sizeStyles[size]}
  /* bottom padding Style */
  ${({ pb }: { pb: string }): any =>
    pb &&
    css`
      padding-bottom: ${pb};
    `}
`;
