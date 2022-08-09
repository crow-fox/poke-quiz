import React, { FC, memo, useContext, useEffect, useState } from "react";
import { LangVersionContext } from "../../providers/LangVersionProvider";
import {
  FetchPokemon,
  FetchPokemonType,
  FetchSpeciesPokemon,
} from "../../types/FetchPokemon";
import { Generation } from "../../types/Generation";
import { Languages } from "../../types/Languages";
import { Pokemon } from "../../types/Pokemon";
import { Status } from "../../types/Status";
import { ButtonBase } from "../atoms/buttons/ButtonBase";
import { ButtonPrimary } from "../atoms/buttons/ButtonPrimary";
import { Select } from "../atoms/form/Select";
import { Loading } from "../atoms/icons/Loading";
import { Center } from "../atoms/styles/Center";
import { Stack } from "../atoms/styles/Stack";
import { Switcher } from "../atoms/styles/Switcher";
import { Correct } from "./statuses/Correct";
import { Giveup } from "./statuses/Giveup";
import { Incorrect } from "./statuses/Incorrect";
import { Question } from "./statuses/Question";

export const Quiz: FC = memo(() => {
  const languageVersion = useContext(LangVersionContext);

  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [generation, setGeneration] = useState<Generation>("0");
  const [answer, setAnswer] = useState<string>("");
  const [status, setStatus] = useState<Status>("question");
  const [loading, setLoading] = useState<boolean>(false);

  const getPokemonRange = (generation: Generation) => {
    let first: number;
    let last: number;
    switch (generation) {
      case "0": {
        first = 1;
        last = 898;
        // last = 905;
        break;
      }
      case "1": {
        first = 1;
        last = 151;
        break;
      }
      case "2": {
        first = 152;
        last = 251;
        break;
      }
      case "3": {
        first = 252;
        last = 386;
        break;
      }
      case "4": {
        first = 387;
        last = 493;
        break;
      }
      case "5": {
        first = 494;
        last = 649;
        break;
      }
      case "6": {
        first = 650;
        last = 721;
        break;
      }
      case "7": {
        first = 722;
        last = 809;
        break;
      }
      case "8": {
        first = 810;
        last = 898;
        break;
      }
      case "9": {
        first = 899;
        last = 905;
        break;
      }
      default: {
        first = 0;
        last = 0;
        break;
      }
    }
    return [first, last];
  };

  const getRandomNum = (min: number, max: number, omit?: number) => {
    // maxの数値は範囲に含まない
    while (true) {
      const i = Math.floor(Math.random() * (max - min) + min);
      if (!omit) {
        return i;
      }
      if (omit !== i) {
        return i;
      }
    }
  };

  const replaceHiragana = (str: string) => {
    return str.replace(/[ぁ-ん]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) + 0x60);
    });
  };

  const getPokemon = async (lang: Languages) => {
    if (status !== "question") {
      return;
    }
    setLoading(true);

    const [pokemonNumberStart, pokemonNumberLast] = getPokemonRange(generation);
    const randomNum = getRandomNum(
      pokemonNumberStart,
      pokemonNumberLast + 1,
      Number(pokemon?.number)
    );

    try {
      // ランダム数字と等しい図鑑ナンバーのポケモンの基礎情報を取得
      const { types: typeList, species }: FetchPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${randomNum}`
      ).then((res) => res.json());

      // 取得した名前から日本語名と外国語名をfetchして取得
      const { names: foreignNameList }: FetchSpeciesPokemon = await fetch(
        species.url
      ).then((res) => res.json());
      const japanName = foreignNameList[9].name;
      let foreignName: string;
      switch (lang) {
        case "english": {
          foreignName = foreignNameList[8].name;
          break;
        }
        case "korean": {
          foreignName = foreignNameList[2].name;
          break;
        }
        case "french": {
          foreignName = foreignNameList[4].name;
          break;
        }
        case "german": {
          foreignName = foreignNameList[5].name;
          break;
        }
        case "chineseHans": {
          foreignName = foreignNameList[10].name;
          break;
        }
        case "chineseHant": {
          foreignName = foreignNameList[3].name;
          break;
        }
        default: {
          foreignName = "";
        }
      }

      // 取得したtypesから日本語のタイプ名の配列をfetchして取得
      const typeUrls: string[] = typeList.map(({ type }) => type.url);
      const types = await Promise.all(
        typeUrls.map(async (typeUrl) => {
          const { names }: FetchPokemonType = await fetch(typeUrl)
            .then((res) => res.json())
            .catch((error) => console.error(error));
          const type = names[0].name;
          return type;
        })
      );

      // 画像のURLを取得
      const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomNum}.png`;

      // 取得した全ての情報をまとめてステートにセットする
      const newPokemon: Pokemon = {
        number: randomNum,
        japanName,
        foreignName,
        types,
        imgUrl,
      };
      setPokemon(newPokemon);
      console.log("try");
    } catch (error) {
      console.error("catch分のエラー");
      setPokemon(undefined);
    } finally {
      console.log("finally");
      setLoading(false);
    }
  };
  useEffect(() => {
    getPokemon(languageVersion);
  }, [generation, status]);

  const handleOnInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const handleOnJudge = () => {
    const replaceAnswer = replaceHiragana(answer);
    setAnswer(replaceAnswer);
    if (replaceAnswer === pokemon?.japanName) {
      setStatus("correct");
    } else {
      setStatus("incorrect");
    }
  };

  const handleOnGiveup = () => {
    setStatus("giveup");
  };

  const handleOnOnce = () => {
    setStatus("once");
    setAnswer("");
  };

  const handleOnNext = async () => {
    // await getPokemon(languageVersion);
    setAnswer("");
    setStatus("question");
  };

  const generationOptions: {
    value: Generation;
    label: string;
    disable?: boolean;
  }[] = [
    {
      value: "0",
      label: "全世代",
    },
    {
      value: "1",
      label: "1世代",
    },
    {
      value: "2",
      label: "2世代",
    },
    {
      value: "3",
      label: "3世代",
    },
    {
      value: "4",
      label: "4世代",
    },
    {
      value: "5",
      label: "5世代",
    },
    {
      value: "6",
      label: "6世代",
    },
    {
      value: "7",
      label: "7世代",
    },
    {
      value: "8",
      label: "8世代",
    },
    {
      value: "9",
      label: "9世代",
      disable: true,
    },
  ];

  const handleOnSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGeneration(e.target.value as Generation);
    setStatus("question");
    setAnswer("");
  };

  return (
    <>
      {loading ? (
        <Center contentCenter={true}>
          <Loading />
        </Center>
      ) : (
        <Stack>
          {(status === "question" || status === "once") && (
            <Select
              value={generation}
              onChange={handleOnSelect}
              options={generationOptions}
            />
          )}

          {(status === "question" || status === "once") && (
            <Question
              pokemon={pokemon}
              answer={answer}
              onChangeInput={handleOnInput}
            />
          )}
          {status === "giveup" && <Giveup pokemon={pokemon} />}
          {status === "correct" && <Correct pokemon={pokemon} />}
          {status === "incorrect" && <Incorrect answer={answer} />}

          <Switcher gap="var(--s-1)">
            {(status === "question" || status === "once") && (
              <ButtonPrimary disabled={answer === ""} onClick={handleOnJudge}>
                ジャッジ
              </ButtonPrimary>
            )}
            {(status === "giveup" || status === "correct") && (
              <ButtonPrimary onClick={handleOnNext}>次のポケモン</ButtonPrimary>
            )}
            {status === "incorrect" && (
              <ButtonPrimary onClick={handleOnOnce}>もう一度</ButtonPrimary>
            )}
            {(status === "question" ||
              status === "once" ||
              status === "incorrect") && (
              <ButtonBase onClick={handleOnGiveup}>あきらめる</ButtonBase>
            )}
          </Switcher>
        </Stack>
      )}
    </>
  );
});
