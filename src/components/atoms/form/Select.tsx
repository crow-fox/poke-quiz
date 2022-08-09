import { FC } from "react";
import styled from "styled-components";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: {
    value: string;
    label: string;
    disable?: boolean;
  }[];
};

export const Select: FC<Props> = (props) => {
  const { value, onChange, options } = props;
  return (
    <SSelectWrapper>
      <SSelect value={value} onChange={onChange}>
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={option.disable}
          >
            {option.label}
          </option>
        ))}
      </SSelect>
    </SSelectWrapper>
  );
};

const SSelectWrapper = styled.div`
  position: relative;
  font-size: var(--f-2);
  width: fit-content;
  max-width: 100%;
  pointer-events: none;
  &::after {
    --size: 0.5em;
    --y: calc(-1 * (50% + var(--size) * 1.414 / 4));
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    right: var(--s-2);
    border-left: 2px solid currentColor;
    border-bottom: 2px solid currentColor;
    width: var(--size);
    height: var(--size);
    transform: translateY(var(--y)) rotate(-45deg);
  }
`;
const SSelect = styled.select`
  background-color: var(--c-white);
  appearance: none;
  border-radius: 4px;
  padding-inline-start: var(--s-2);
  padding-inline-end: var(--s0);
  padding-block: var(--s-2);
  font-weight: 700;
  cursor: pointer;
  pointer-events: auto;
  &:hover,
  &:focus {
    background-color: var(--c-gray);
  }
`;
