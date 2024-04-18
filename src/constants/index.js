import {
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  js,
  react,
  redux,
  tailwind,
  css,
  ts,
  sass,
  html,
  npm,
  git,
  twitter,
  instagram,
  vk,
} from "../assets/index";

const navLinks = [
  {
    id: "main",
    title: "Главная",
  },
  {
    id: "projects",
    title: "Проекты",
  },
  {
    id: "skills",
    title: "Навыки",
  },
  {
    id: "contacts",
    title: "Контакты",
  },
];
const socials = [
  {
    link: "http://localhost:5173/",
    label: "Главная",
  },
  {
    link: "http://localhost:5173/",
    label: "Проекты",
  },
  {
    link: "http://localhost:5173/",
    label: "Обо мне",
  },
  {
    link: "http://localhost:5173/",
    label: "Контакты",
  },
];
const projects = [
  {
    name: "Сайт отеля",
    description:
      "Данный сайт предназначен для администратора отеля, который имеет функции добавления, удаления, изменения номеров. Имеет статистику на разные промежутки времени и базу данных Supabase",
    tags: [
      {
        name: "React",
        color: "text-cyan-400",
      },
      {
        name: "Supabase",
        color: "text-green-400",
      },
    ],
    image: project_1,

    source_code_link: "https://github.com/ValeriiBeliakov/hotel-helper",
  },
  {
    name: "Туристический сайт",
    description:
      "Это сайт с хороших дизайном, содержащий только адаптивную верстку и динамические элементы",
    tags: [
      {
        name: "scss",
        color: "text-red-400",
      },
      {
        name: "Html",
        color: "text-amber-500",
      },
      {
        name: "js",
        color: "text-yellow-300",
      },
    ],
    image: project_2,

    source_code_link: "https://github.com/ValeriiBeliakov/travel",
  },
  {
    name: "Сайт OmniFood",
    description:
      "Это сайт, содержащий только адаптивную и современную  верстку ",
    tags: [
      {
        name: "Css",
        color: "text-sky-400",
      },
      {
        name: "Html",
        color: "text-amber-500",
      },
      {
        name: "js",
        color: "text-yellow-300",
      },
    ],
    image: project_3,

    source_code_link: "https://github.com/ValeriiBeliakov/food-project",
  },
  {
    name: "World Travel",
    description:
      "Это сайт позволяет по клику узнавать свое локальное местоположение, а так же дает возможность оставить метки на в точках мира,где вы уже были",
    tags: [
      {
        name: "React",
        color: "text-cyan-400",
      },
      {
        name: "Html",
        color: "text-amber-500",
      },
      {
        name: "js",
        color: "text-yellow-300",
      },
    ],
    image: project_4,
    source_code_link: "https://github.com/ValeriiBeliakov/world-geo",
  },
  {
    name: "CyberPunk",
    description: "Это сайт содержит только адаптивную и современную  верстку",
    tags: [
      {
        name: "Css",
        color: "text-sky-400",
      },
      {
        name: "Html",
        color: "text-amber-500",
      },
    ],
    image: project_5,
    source_code_link: "https://github.com/ValeriiBeliakov/cyberpunk",
  },
];

const skills = [
  { icon: html, label: "html" },
  { icon: css, label: "css" },
  { icon: js, label: "javascript" },
  { icon: sass, label: "sass" },
  { icon: react, label: "react" },
  { icon: ts, label: "typescript" },
  { icon: redux, label: "redux" },
  { icon: tailwind, label: "tailwind" },
  { icon: npm, label: "npm" },
];
const footer_icons = [
  { icon: vk, label: "vk" },
  { icon: instagram, label: "instagram" },
  { icon: twitter, label: "twitter" },
  { icon: git, label: "git" },
];
export { navLinks, socials, projects, skills, footer_icons };
