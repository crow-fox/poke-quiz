import { FC, ReactNode } from "react";
import styled from "styled-components";
import { TextProps } from "../../../types/TextProps";

export const TextBase: FC<TextProps> = (props) => {
  const {
    children,
    styles = {
      fontSize: "var(--f0)",
      lineHeight: "var(--lh0)",
    },
    level,
  } = props;

  switch (level) {
    case 1: {
      return <STextH1 styles={styles}>{children}</STextH1>;
    }
    case 2: {
      return <STextH2 styles={styles}>{children}</STextH2>;
    }
    case 3: {
      return <STextH3 styles={styles}>{children}</STextH3>;
    }
    case 4: {
      return <STextH4 styles={styles}>{children}</STextH4>;
    }
    case 5: {
      return <STextH5 styles={styles}>{children}</STextH5>;
    }
    case 6: {
      return <STextH6 styles={styles}>{children}</STextH6>;
    }
    default: {
      return <STextBase styles={styles}>{children}</STextBase>;
    }
  }
};

const STextBase = styled.p<Omit<TextProps, "children">>`
  color: ${({ styles }) => styles?.color};
  font-size: ${({ styles }) => styles?.fontSize};
  font-weight: ${({ styles }) => styles?.fontWeight};
  text-align: ${({ styles }) => styles?.textAlign};
  line-height: ${({ styles }) => styles?.lineHeight};
  text-transform: ${({ styles }) => styles?.textTransform};
  font-family: ${({ styles }) => styles?.fontFamily};
`;

const STextH1 = STextBase.withComponent("h1");
const STextH2 = STextBase.withComponent("h2");
const STextH3 = STextBase.withComponent("h3");
const STextH4 = STextBase.withComponent("h4");
const STextH5 = STextBase.withComponent("h5");
const STextH6 = STextBase.withComponent("h6");
