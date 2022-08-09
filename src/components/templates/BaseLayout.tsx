import { FC } from "react";
import styled from "styled-components";
import { ChildOnlyProps } from "../../types/ChildOnlyProps";
import { Box } from "../atoms/styles/Box";
import { Center } from "../atoms/styles/Center";
import { Footer } from "../organisms/layout/Footer";
import { Header } from "../organisms/layout/Header";

export const BaseLayout: FC<ChildOnlyProps> = ({ children }) => {
  return (
    <SContent>
      <Header />
      <main>
        <Box>{children}</Box>
      </main>
      <Footer />
    </SContent>
  );
};

const SContent = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100%;
  background-color: var(--c-white);
  max-width: var(--container);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  margin-inline: auto;
`;
