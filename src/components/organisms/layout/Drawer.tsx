import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { LangVersionContext } from "../../../providers/LangVersionProvider";
import { Box } from "../../atoms/styles/Box";
import { GlobalNav } from "../navigation/GlobalNav";

type Props = {
  id?: string;
  isOpen: boolean;
};

export const Drawer: FC<Props> = (props) => {
  const { id, isOpen } = props;

  return (
    <>
      <SDrawer id={id} open={isOpen}>
        <Box paddingBlock="var(--s2)" paddingInline="var(--s0)">
          <GlobalNav />
        </Box>
      </SDrawer>
    </>
  );
};

const SDrawer = styled.dialog`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  overflow-y: auto;
  width: min(var(--container), 100%);
  height: 100%;
  background-color: var(--c-gray);
  z-index: 2;
`;
