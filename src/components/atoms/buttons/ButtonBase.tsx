import { FC, ReactNode } from "react";
import styled from "styled-components";
import { ButtonProps } from "../../../types/ButtonProps";

export const ButtonBase: FC<ButtonProps> = (props) => {
  const { onClick, disabled, children } = props;
  return (
    <SButtonBase disabled={disabled} onClick={onClick}>
      {children}
    </SButtonBase>
  );
};

export const SButtonBase = styled.button<Omit<ButtonProps, "children">>`
  padding-block: var(--s-1);
  padding-inline: var(--s-1);
  background-color: var(--c-white);
  border: 1px solid var(--c-gray);
  color: var(--c-black);
  font-size: var(--f0);
  font-weight: 700;
  border-radius: 4px;
  transition: background-color 0.3s linear 0s;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    text-decoration: line-through;
    cursor: auto;
  }
  :not(:disabled) {
    &:hover,
    &:focus {
      background-color: var(--c-gray);
    }
  }
`;
