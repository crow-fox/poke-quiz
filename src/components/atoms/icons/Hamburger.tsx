import { FC } from "react";
import styled from "styled-components";

type Props = {
  targetId: string;
  isOpen: boolean;
  onClick: () => void;
};

export const Hamburger: FC<Props> = (props) => {
  const { targetId, isOpen, onClick } = props;
  return (
    <SHamburger
      aria-controls={targetId}
      aria-expanded={isOpen}
      onClick={onClick}
      type="button"
    >
      <span>
        <span></span>
      </span>
    </SHamburger>
  );
};

const SHamburger = styled.button`
  --size: 48px;
  display: grid;
  place-content: center;
  color: var(--c-black);
  background: linear-gradient(
    var(--c-red) calc(50% - 0.5px),
    var(--c-black) calc(50% - 0.5px),
    var(--c-black) calc(50% + 0.5px),
    var(--c-white) calc(50% + 0.5px)
  );
  border-radius: 50%;
  width: var(--size);
  height: var(--size);
  transition: transform 0.3s ease 0s;
  z-index: 2;
  cursor: pointer;

  &[aria-expanded="true"] {
    transform: rotate(180deg);
    & > span {
      & > span {
        background-color: transparent;
        &:before {
          transform: rotate(45deg);
          margin-block-start: 0;
        }
        &:after {
          transform: rotate(-45deg);
          margin-block-start: -2px;
        }
      }
    }
  }
  &[aria-expanded="false"] {
    transform: rotate(0deg);
    & > span {
      & > span {
        background-color: currentColor;
        &:before {
          margin-block-start: -6px;
        }
        &:after {
          margin-block-start: 10px;
        }
      }
    }
  }

  & > span {
    --size: 32px;
    position: relative;
    background-color: var(--c-white);
    border: 1px solid var(--c-black);
    border-radius: 50%;
    width: var(--size);
    height: var(--size);
    & > span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: currentColor;
      border-radius: 2px;
      width: calc(var(--size) / 2);
      height: 2px;
      transition: background-color 0.3s ease 0s;
      &::before,
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: currentColor;
        border-radius: inherit;
        transition: transform 0.3s ease 0s, margin-block-start 0.3s ease 0s;
      }
    }
  }
`;
