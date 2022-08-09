import { FC } from "react";
import styled from "styled-components";
import { InputTextProps } from "../../../types/InputTextProps";

export const InputText: FC<InputTextProps> = (props) => {
  const { id, value, onChange } = props;
  return (
    <SInputText
      id={id}
      type="text"
      value={value}
      onChange={(e) => onChange(e)}
      autoComplete="off"
    />
  );
};

const SInputText = styled.input`
  appearance: none;
  border: 1px solid var(--c-black);
  background-color: var(--c-white);
  padding: var(--s-1);
  font-size: max(var(--f1), 16px);
  font-weight: 700;
  border-radius: 4px;
  width: 100%;
  &:hover,
  &:focus {
    background-color: var(--c-gray);
  }
`;
