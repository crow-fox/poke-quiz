import { FC, PropsWithChildren, ReactNode } from "react";
import styled from "styled-components";
import { InputTextProps } from "../../../types/InputTextProps";
import { InputText } from "../../atoms/form/InputText";

type Props = InputTextProps & {
  children: ReactNode;
};

export const InputTextArea: FC<Props> = (props) => {
  const { id, value, onChange, children } = props;
  return (
    <>
      <SLabel htmlFor={id}>{children}</SLabel>
      <InputText id={id} value={value} onChange={(e) => onChange(e)} />
    </>
  );
};

const SLabel = styled.label`
  font-size: var(--f-3);
  &::before {
    --size: 0.75em;
    content: "";
    display: inline-block;
    background-color: var(--c-black);
    margin-inline-end: var(--s-5);
    width: var(--size);
    height: var(--size);
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }
`;
