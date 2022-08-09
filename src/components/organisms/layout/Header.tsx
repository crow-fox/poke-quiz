import { FC, useContext, useState } from "react";
import { LangVersionContext } from "../../../providers/LangVersionProvider";
import { Hamburger } from "../../atoms/icons/Hamburger";
import { Box } from "../../atoms/styles/Box";
import { Cluster } from "../../atoms/styles/Cluster";
import { TextBase } from "../../atoms/texts/TextBase";
import { Drawer } from "./Drawer";

export const Header: FC = () => {
  const languageVersion = useContext(LangVersionContext);
  let jaLanguageVersion: string;
  switch (languageVersion) {
    case "english": {
      jaLanguageVersion = "英語";
      break;
    }
    case "french": {
      jaLanguageVersion = "フランス語";
      break;
    }
    case "german": {
      jaLanguageVersion = "ドイツ語";
      break;
    }
    case "korean": {
      jaLanguageVersion = "韓国語";
      break;
    }
    case "chineseHans": {
      jaLanguageVersion = "簡体字";
      break;
    }
    case "chineseHant": {
      jaLanguageVersion = "繁体字";
      break;
    }
    default: {
      jaLanguageVersion = "";
      break;
    }
  }

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnClick = () => setIsOpen(!isOpen);
  return (
    <header>
      <Box paddingBlock="var(--s-1)">
        <Cluster
          gap="var(--s-1)"
          justifyContent="space-between"
          alignItems="center"
        >
          <TextBase
            level={1}
            styles={{
              fontWeight: "700",
            }}
          >
            ポケ名クイズ（{jaLanguageVersion}）
          </TextBase>
          <Drawer id="drawer" isOpen={isOpen} />
          <Hamburger
            targetId="drawer"
            isOpen={isOpen}
            onClick={handleOnClick}
          />
        </Cluster>
      </Box>
    </header>
  );
};
