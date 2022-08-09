import { createContext, FC, ReactNode } from "react";
import { Languages } from "../types/Languages";

export const LangVersionContext = createContext<Languages>("english");

type Props = {
  children: ReactNode;
  lang: Languages;
};

export const LangVersionProvider: FC<Props> = (props) => {
  const { lang, children } = props;
  return (
    <LangVersionContext.Provider value={lang}>
      {children}
    </LangVersionContext.Provider>
  );
};
