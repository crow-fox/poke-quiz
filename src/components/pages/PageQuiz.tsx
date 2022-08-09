import { FC } from "react";
import { LangVersionProvider } from "../../providers/LangVersionProvider";
import { Languages } from "../../types/Languages";
import { Quiz } from "../organisms/Quiz";
import { BaseLayout } from "../templates/BaseLayout";

type Props = {
  lang: Languages;
};

export const PageQuiz: FC<Props> = (props) => {
  const { lang } = props;

  return (
    <LangVersionProvider lang={lang}>
      <BaseLayout key={lang}>
        <Quiz />
      </BaseLayout>
    </LangVersionProvider>
  );
};
