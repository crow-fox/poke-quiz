import { FC } from "react";
import { Pokemon } from "../../../types/Pokemon";
import { Stack } from "../../atoms/styles/Stack";
import { TextBase } from "../../atoms/texts/TextBase";
import { InputTextArea } from "../../molecules/form/InputTextArea";

type Props = {
  pokemon: Pokemon | undefined;
  answer: string;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Question: FC<Props> = (props) => {
  const { pokemon, answer, onChangeInput } = props;
  return (
    <Stack>
      <Stack gap="var(--s-3)">
        <TextBase styles={{ fontSize: "var(--f1)", lineHeight: "var(--lh-1)" }}>
          Q.このポケモンの名前は？
        </TextBase>
        <TextBase
          styles={{
            fontSize: "var(--f5)",
            fontWeight: "700",
            lineHeight: "var(--lh-5)",
            textTransform: "capitalize",
          }}
          level={2}
        >
          {pokemon?.foreignName}
        </TextBase>
        <TextBase
          styles={{ fontSize: "var(--f-1)", lineHeight: "var(--lh-1)" }}
        >
          タイプ：{pokemon?.types.join("・")}
        </TextBase>
      </Stack>
      <Stack gap="var(--s-4)">
        <InputTextArea
          id="answer-input"
          value={answer}
          onChange={(e) => onChangeInput(e)}
        >
          ひらがなorかたかなで入力
        </InputTextArea>
      </Stack>
    </Stack>
  );
};
