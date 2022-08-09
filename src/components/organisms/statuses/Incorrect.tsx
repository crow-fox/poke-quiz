import { FC } from "react";
import { Stack } from "../../atoms/styles/Stack";
import { TextBase } from "../../atoms/texts/TextBase";

type Props = {
  answer: string;
};

export const Incorrect: FC<Props> = (props) => {
  const { answer } = props;
  return (
    <Stack>
      <Stack gap="var(--s-3)">
        <TextBase
          level={2}
          styles={{
            fontSize: "var(--f5)",
            fontWeight: "700",
            lineHeight: "var(--lh-5)",
          }}
        >
          不正解
        </TextBase>
        <TextBase
          styles={{
            fontSize: "var(--f2)",
            fontWeight: "700",
            lineHeight: "var(--lh-2)",
          }}
        >
          {answer}
        </TextBase>
        <TextBase
          styles={{ fontSize: "var(--f-1)", lineHeight: "var(--lh-1)" }}
        >
          ではありません
        </TextBase>
      </Stack>
    </Stack>
  );
};
