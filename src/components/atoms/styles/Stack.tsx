import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  gap?: string;
};

export const Stack: FC<Props> = (props) => {
  const { children, gap = "var(--s0)" } = props;
  return <SStack gap={gap}>{children}</SStack>;
};

const SStack = styled.div<Omit<Props, "children">>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  & > * {
    margin-block: 0;
  }
  & > * + * {
    margin-block-start: ${({ gap }) => gap};
  }
`;
