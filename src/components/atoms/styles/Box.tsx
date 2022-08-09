import { FC, ReactNode } from "react";
import styled, { css } from "styled-components";

type Props = {
  children: ReactNode;
  paddingInline?: string;
  paddingBlock?: string;
  borderWidth?: string;
  color?: string;
  backgroundColor?: string;
};
export const Box: FC<Props> = (props) => {
  const {
    children,
    paddingBlock,
    paddingInline,
    borderWidth,
    color,
    backgroundColor,
  } = props;
  return (
    <SBox
      paddingBlock={paddingBlock}
      paddingInline={paddingInline}
      borderWidth={borderWidth}
      color={color}
      backgroundColor={backgroundColor}
    >
      {children}
    </SBox>
  );
};

const SBox = styled.div<Omit<Props, "children">>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor && backgroundColor};
  color: ${({ color }) => color && color};
  padding-inline: ${({ paddingInline }) =>
    paddingInline ? paddingInline : "var(--s0)"};
  padding-block: ${({ paddingBlock }) =>
    paddingBlock ? paddingBlock : "var(--s0)"};
  border: 0 var(--c-border) solid;
  border-width: ${({ borderWidth }) => borderWidth && borderWidth};
`;
