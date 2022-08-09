import { FC } from "react";
import styled from "styled-components";
import { Box } from "../../atoms/styles/Box";
import { Center } from "../../atoms/styles/Center";
import { TextBase } from "../../atoms/texts/TextBase";

export const Footer: FC = () => {
  return (
    <footer>
      <Box
        backgroundColor="var(--c-black)"
        color="var(--c-white)"
        paddingBlock="var(--s-3)"
      >
        <Center contentCenter={true}>
          <TextBase
            styles={{
              fontSize: "var(--f-3)",
              fontWeight: "700",
            }}
          >
            &copy; 2022 crow-fox
          </TextBase>
        </Center>
      </Box>
    </footer>
  );
};
