import {
  project_1,
  project_2,
  project_3,
  project_4,
  project_5,
  project_6,
  project_7,
  project_8,
  project_9,
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
  git2,
  docker,
  webpack,
  vs_code,
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
    name: "Сайт портфолио",
    description: "",
    tags: [
      {
        name: "React",
        color: "text-cyan-400",
      },
      {
        name: "tailwind",
        color: "text-blue-400",
      },
      {
        name: "framer-motion",
        color: "text-red-400",
      },
    ],
    image: project_1,
    source_site_link: "./",
    source_code_link: "https://github.com/ValeriiBeliakov/main-portfolio",
  },
  {
    name: "Pizza-clone",
    description:
      "Этот проект повторяет функционал Dodo пиццы, создан на основе  next js, prisma+postgres, tailwind css.В проекты реализовано множество фильтров и сортировок, есть авторизация и регистрация(credentials, google, github).Без адаптива(только для desktop и более экранов)",
    tags: [
      {
        name: "next js",
        color: "text-green-400",
      },
      {
        name: "ts",
        color: "text-blue-500",
      },
      {
        name: "postgress",
        color: "text-blue-600",
      },
      {
        name: "zustand",
        color: "text-yellow-400",
      },
    ],
    image: project_6,
    source_site_link: "https://next-pizza-store.vercel.app/",
    source_code_link: "https://github.com/ValeriiBeliakov/pizza-clone",
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
    source_site_link: " https://travel-ocean-project.netlify.app/",
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
    source_site_link: "https://simple-omni-food-project.netlify.app/",
    source_code_link: "https://github.com/ValeriiBeliakov/food-project",
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
    image: project_4,
    source_site_link: "https://cyberpunk-proj.netlify.app/",
    source_code_link: "https://github.com/ValeriiBeliakov/cyberpunk",
  },
  {
    name: "GadgetStrateg",
    description:
      "Сайт электроники GadgetStrateg, в проекте можно добавлять товары в корзину, избранное, создавать аккаунт.Есть множество фильтров и сортировок",
    tags: [
      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "redux-toolkit",
        color: "text-red-500",
      },
      {
        name: "scss",
        color: "text-red-400",
      },
      {
        name: "ts",
        color: "text-blue-400",
      },
      {
        name: "firebase",
        color: "text-purple-500",
      },
    ],
    image: project_5,
    source_site_link: "https://gadgetstrateg.netlify.app/main",
    source_code_link: "https://github.com/ValeriiBeliakov/gadgetstrateg",
  },
  {
    name: "Hotel-Helper",
    description:
      "Данный сайт предназначен для администратора.В нем есть множество фильтров,возможность управлять аккаунтом,номерами и т.д   p.s test_account@gmail.com 1234",
    tags: [
      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "styled components",
        color: "text-purple-500",
      },
      {
        name: "react query",
        color: "text-blue-400",
      },
      {
        name: "supabase",
        color: "text-green-400",
      },
    ],
    image: project_7,
    source_site_link: "https://the-hotel-helper.netlify.app/",
    source_code_link: "https://github.com/ValeriiBeliakov/hotel-helper",
  },
  {
    name: "Тестовое задание",
    description: "Верстка с адаптивным дизайном",
    tags: [
      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "scss",
        color: "text-red-400",
      },
    ],
    image: project_8,
    source_site_link: "https://elaborate-faun-d02976.netlify.app/",
    source_code_link: "https://github.com/ValeriiBeliakov/test",
  },
  {
    name: "Анимированный слайдер",
    description:
      "Создание анимированного слайдера для экрана ноутбука и телефонв.Создание анимации с помощью gsap",
    tags: [
      {
        name: "React",
        color: "text-blue-500",
      },
      {
        name: "Gsap",
        color: "text-green-400",
      },
      {
        name: "webpack",
        color: "text-blue-600",
      },
      {
        name: "swiper",
        color: "text-blue-400",
      },
    ],
    image: project_9,
    source_site_link: "https://test-animated-slider.netlify.app/",
    source_code_link: "https://github.com/ValeriiBeliakov/slider",
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
  { icon: docker, label: "docker" },
  { icon: git2, label: "git" },
  { icon: tailwind, label: "tailwind" },
  { icon: npm, label: "npm" },
  { icon: webpack, label: "webpack" },
  { icon: vs_code, label: "vs code" },
];
const footer_icons = [
  { icon: vk, label: "vk" },
  { icon: instagram, label: "instagram" },
  { icon: twitter, label: "twitter" },
  { icon: git, label: "git" },
];
export { navLinks, socials, projects, skills, footer_icons };
