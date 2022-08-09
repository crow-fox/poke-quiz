import { FC } from "react";
import styled from "styled-components";
import { GlobalNavLink } from "../../atoms/links/GlobalNavLink";
import { Stack } from "../../atoms/styles/Stack";

export const GlobalNav: FC = () => {
  return (
    <nav>
      <Stack gap="var(--s-4)">
        <SList>
          <li>
            <GlobalNavLink to="/">英語版</GlobalNavLink>
          </li>
          <li>
            <GlobalNavLink to="/fre">フランス語版</GlobalNavLink>
          </li>
          <li>
            <GlobalNavLink to="/ger">ドイツ語版</GlobalNavLink>
          </li>
          <li>
            <GlobalNavLink to="/kor">韓国語版</GlobalNavLink>
          </li>
          <li>
            <GlobalNavLink to="/chi-hans">簡体字版</GlobalNavLink>
          </li>
          <li>
            <GlobalNavLink to="/chi-hant">繁体字版</GlobalNavLink>
          </li>
        </SList>
      </Stack>
    </nav>
  );
};

const SList = styled.ul`
  display: grid;
  gap: var(--s-1);
`;
