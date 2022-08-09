import { FC, ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

type Props = {
  current?: boolean;
  to: string;
  children: ReactNode;
};

export const GlobalNavLink: FC<Props> = (props) => {
  const { current = false, to, children } = props;
  return (
    <>
      {current ? (
        <SLink aria-current={current} to={to}>
          {children}
        </SLink>
      ) : (
        <SLink to={to}>{children}</SLink>
      )}
    </>
  );
};

const SLink = styled(NavLink)`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: var(--s-2);
  color: var(--c-black);
  font-weight: 700;
  font-size: var(--f-18);
  background-color: var(--c-white);
  border-radius: 4px;
  padding: var(--s-2);

  &::before {
    --size: 0.25em;
    content: "";
    background-color: currentColor;
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
  }

  &[aria-current="page"] {
    color: var(--c-red);
  }

  &:hover,
  &:focus {
    color: var(--c-red);
  }
`;
