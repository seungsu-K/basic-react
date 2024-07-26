import React, { createElement as h } from "https://esm.sh/react";

/*
  props: {
    name: '사용자 이름',
    photo: '이미지 파일 이름',
    status?: 'online' | 'offline' | 'dont-disturb' | 'away'
  }
*/

function Avatar(props) {
  const { name, photo, status = "offline", size = 64 } = props;

  // status 조건 분기
  // 1. if 문
  // 2. 3항 연산자
  // 3. 논리 연산자
  // 4. switch 문
  let iconPath = "";
  let statusMessage = "";

  switch (status) {
    default:
    case "offline":
      iconPath = "/icons/status-offline.svg";
      statusMessage = "오프라인";
      break;
    case "online":
      iconPath = "/icons/status-online.svg";
      statusMessage = "온라인";
      break;
    case "dont-disturb":
      iconPath = "/icons/status-dont-disturb.svg";
      statusMessage = "방해금지";
      break;
    case "away":
      iconPath = "/icons/status-away.svg";
      statusMessage = "자리비움";
      break;
  }

  return h(
    "figure",
    {
      className: "Avatar",
      "aria-label": `${name} (${statusMessage})`,
      title: `${name} (${statusMessage})`,
    },
    h("img", {
      src: `/faces/${photo}`,
      alt: name,
      width: size,
      height: size,
    }),
    h(
      "figcaption",
      null,
      h("img", {
        src: iconPath,
        alt: "",
      })
    )
  );
}

export default Avatar;
