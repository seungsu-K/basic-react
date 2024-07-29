# Vite 커스텀 템플릿

React 개발을 위한 나만의 Vite 커스텀 템플릿 작성하기

1. Readme, gitignore 설정

2. manual installation

   1. 개발자 모드로 vite 설치
      pnpm add vite -D # --save-dev

      해당 폴더에 package.json이 있어야 함

   2. react, react-dom 설치
      pnpm add react react-dom

   3. @types 설치
      pnpm add @types/react @types/react-dom @types/node -D

      타입 선언 파일

   4. vite 플러그인
      pnpm add @vitejs/plugin-react -D

      vite.config.js 파일 생성

      react를 import하지 않고 jsx를 사용할 수 있음
      <https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html>

   5. eslint 및 플러그인 설치
      pnpm create @eslint/config@latest
      pnpm eslint ./src --report-unused-disable-directives --ignore-pattern .gitignore
      pnpm add eslint-plugin-react-hooks eslint-plugin-react-refresh -D

      https://github.com/jsx-eslint/eslint-plugin-react?tab=readme-ov-file#plugin

   6. 절대경로 지정
      vitconfig에서 alias 설정

      vscode도 @를 이해하도록 jsconfig.json 파일 설정
