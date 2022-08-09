import { FC } from "react";
import styled from "styled-components";

export const Loading: FC = () => {
  return <SLoading />;
};

const SLoading = styled.div`
  --size: 64px;
  --line: 56%;
  position: relative;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background: radial-gradient(
      circle,
      var(--c-white) var(--line),
      rgba(0, 0, 0, 0) calc(var(--line) + 1px)
    ),
    conic-gradient(
      from 180deg,
      var(--c-black) 0,
      var(--c-white) 90%,
      rgba(0, 0, 0, 0) 90%
    );
  animation: roll 0.5s linear 0s infinite;

  @keyframes roll {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
