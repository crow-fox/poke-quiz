import { ReactNode } from "react";

export type TextProps = {
  children: ReactNode;
  styles?: {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: number | string;
    textAlign?: string;
    fontFamily?: string;
    textTransform?: "uppercase" | "capitalize" | "none" | "lowercase";
  };
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};
