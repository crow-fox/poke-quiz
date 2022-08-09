import { FC } from "react";
import { Pokemon } from "../../../types/Pokemon";
import { Center } from "../../atoms/styles/Center";
import { Stack } from "../../atoms/styles/Stack";
import { TextBase } from "../../atoms/texts/TextBase";

type Props = {
  pokemon: Pokemon | undefined;
};

export const Correct: FC<Props> = (props) => {
  const { pokemon } = props;
  return (
    <Stack>
      <Stack gap="var(--s-3)">
        <TextBase
          styles={{
            fontSize: "var(--f5)",
            fontWeight: "700",
            lineHeight: "var(--lh-5)",
            color: "var(--c-red)",
          }}
        >
          正解
        </TextBase>
        <TextBase
          styles={{
            fontSize: "var(--f2)",
            fontWeight: "700",
            lineHeight: "var(--lh-2)",
          }}
          level={2}
        >
          {pokemon?.japanName}
        </TextBase>
        <TextBase
          styles={{
            fontSize: "var(--f-1)",
            lineHeight: "var(--lh-1)",
            textTransform: "capitalize",
          }}
        >
          {pokemon?.foreignName}
        </TextBase>
        <TextBase
          styles={{ fontSize: "var(--f-1)", lineHeight: "var(--lh-1)" }}
        >
          タイプ：{pokemon?.types.join("・")}
        </TextBase>
      </Stack>
      <Stack>
        <Center contentCenter={true}>
          <img
            width="200"
            height="200"
            src={pokemon?.imgUrl}
            alt={pokemon?.japanName + "の画像"}
          />
        </Center>
      </Stack>
    </Stack>
  );
};
