import { FC, ReactNode } from "react";
import styled from "styled-components";
import { ButtonProps } from "../../../types/ButtonProps";
import { SButtonBase } from "./ButtonBase";

export const ButtonPrimary: FC<ButtonProps> = (props) => {
  const { onClick, disabled, children } = props;
  return (
    <SButtonPrimary disabled={disabled} onClick={onClick}>
      {children}
    </SButtonPrimary>
  );
};

const SButtonPrimary = styled(SButtonBase)`
  color: var(--c-white);
  background-color: var(--c-red);
  border-color: var(--c-red);
  &:not(:disabled) {
    &:hover,
    &:focus {
      color: var(--c-red);
      background-color: var(--c-white);
      border-color: var(--c-red);
    }
  }
`;
