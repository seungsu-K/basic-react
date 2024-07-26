import React, { createElement as h } from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

import { ArchitectureListFuncPage } from "./pages/ArchetectureListPage.js";
import AvatarListPage from "./pages/AvatarPageList.js";

const container = document.getElementById("react-app");

if (container) {
  // createRoot(container).render(h(ArchitectureListFuncPage));
  createRoot(container).render(h(AvatarListPage));
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다');
}

// TODO: Avatar 컴포넌트 및 페이지 컴포넌트 작성 후 화면에 표시
// 1. 페이지 컴포넌트 작성 및 main.js 연결
// 2. Avatar 컴포넌트 작성 및 status 속성(props) 설정
// 3. status 속성(props)에 따라 화면에 표시되는 Avatar 구성
