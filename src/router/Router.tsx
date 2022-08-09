import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Page404 } from "../components/pages/Page404";
import { PageAbout } from "../components/pages/PageAbout";
import { PageQuiz } from "../components/pages/PageQuiz";

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageQuiz lang="english" />} />
        <Route path="/fre" element={<PageQuiz lang="french" />} />
        <Route path="/ger" element={<PageQuiz lang="german" />} />
        <Route path="/kor" element={<PageQuiz lang="korean" />} />
        <Route path="/chi-hans" element={<PageQuiz lang="chineseHans" />} />
        <Route path="/chi-hant" element={<PageQuiz lang="chineseHant" />} />
        <Route path="/about" element={<PageAbout />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};
