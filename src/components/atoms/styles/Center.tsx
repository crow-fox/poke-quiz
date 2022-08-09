import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

type Props = {
  children: ReactNode;
  maxWidth?: string;
  gutter?: string;
  contentCenter?: boolean;
};

export const Center: FC<Props> = (props) => {
  const { children, contentCenter, maxWidth, gutter } = props;
  return (
    <SCenter maxWidth={maxWidth} gutter={gutter} contentCenter={contentCenter}>
      {children}
    </SCenter>
  );
};

const SCenter = styled.div<Omit<Props, "children">>`
  --maxWidth: ${({ maxWidth }) => (maxWidth ? maxWidth : "var(--container)")};
  --gutter: ${({ gutter }) => (gutter ? gutter : "var(--s0)")};
  width: min(calc(var(--maxWidth) + var(--gutter) * 2), 100%);
  margin-inline: auto;
  padding-inline: var(--gutter);
  ${({ contentCenter }) =>
    contentCenter &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
    `}
`;
