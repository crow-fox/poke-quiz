import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  gap?: string;
};
export const Switcher: FC<Props> = (props) => {
  const { children, gap } = props;
  return <SSwitcher gap={gap}>{children}</SSwitcher>;
};

const SSwitcher = styled.div<Omit<Props, "children">>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap }) => (gap ? gap : "var(--s0)")};
  & > * {
    flex-grow: 1;
    flex-basis: calc((40rem - 100%) * 999);
  }
`;
