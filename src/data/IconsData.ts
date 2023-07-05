const moveGithub = () => window.open("https://github.com/limhoooo", "_blank");
const moveYoutube = () =>
  window.open("https://limhoooo-youtube.netlify.app", "_blank");
const moveResume = () =>
  window.open(
    "https://few-tarragon-4ce.notion.site/fd8122d6b1ee44fd89016b1bf807d5f2",
    "_blank"
  );
const movetistory = () =>
  window.open("https://limhoooo.tistory.com/", "_blank");
const moveCarrot = () =>
  window.open("https://limhoooo-game-carrot.netlify.app/", "_blank");
const moveStarbucks = () =>
  window.open("https://limhoooo-starbuxts.netlify.app", "_blank");

const iconsData = [
  {
    id: new Date().getTime() + Math.random(),
    src: new URL(`@/assets/images/computer.png`, import.meta.url).href,
    alt: "computer icon",
    name: "내컴퓨터",
    type: "folder",
    icons: [
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/notion.png`, import.meta.url).href,
        alt: "tistory icon",
        name: "My Resume",
        type: "link",
        onMoveLink: moveResume,
      },
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/tistory_icon.png`, import.meta.url).href,
        alt: "tistory icon",
        name: "My Tistory",
        type: "link",
        onMoveLink: movetistory,
      },
      {
        id: new Date().getTime() + Math.random(),
        src: new URL(`@/assets/images/github_logo.png`, import.meta.url).href,
        alt: "gitHub icon",
        name: "My GitHub",
        type: "link",
        onMoveLink: moveGithub,
      },
    ],
  },
  {
    id: new Date().getTime() + Math.random(),
    src: new URL(`@/assets/images/folder.png`, import.meta.url).href,
    alt: "folder icon",
    name: "내 폴더",
    type: "folder",
  },
  {
    id: new Date().getTime() + Math.random(),
    src: new URL(`@/assets/images/github_logo.png`, import.meta.url).href,
    alt: "gitHub icon",
    name: "GitHub",
    type: "link",
    onMoveLink: moveGithub,
  },
  {
    id: new Date().getTime() + Math.random(),
    src: new URL(`@/assets/images/notepad.png`, import.meta.url).href,
    alt: "notepad icon",
    name: "메모장",
    type: "notepad",
  },
  {
    id: new Date().getTime() + Math.random(),
    src: new URL(`@/assets/images/youtube-icon.png`, import.meta.url).href,
    alt: "youtube icon",
    name: "YouTube",
    type: "link",
    onMoveLink: moveYoutube,
  },
  {
    id: new Date().getTime() + Math.random(),
    src: new URL(`@/assets/images/carrot_icon.png`, import.meta.url).href,
    alt: "carrot icon",
    name: "당근잡기",
    type: "link",
    onMoveLink: moveCarrot,
  },
  {
    id: new Date().getTime() + Math.random(),
    src: new URL(`@/assets/images/starbucks_logo.png`, import.meta.url).href,
    alt: "starbucks_logo",
    name: "스타벅스",
    type: "link",
    onMoveLink: moveStarbucks,
  },
];

export default iconsData;
