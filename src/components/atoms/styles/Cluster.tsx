import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
  gap?: string;
  justifyContent?: string;
  alignItems?: string;
};

export const Cluster: FC<Props> = (props) => {
  const { children, gap, justifyContent, alignItems } = props;
  return (
    <SCluster gap={gap} justifyContent={justifyContent} alignItems={alignItems}>
      {children}
    </SCluster>
  );
};

const SCluster = styled.div<Omit<Props, "children">>`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ gap }) => (gap ? gap : "var(--s0)")};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
`;
