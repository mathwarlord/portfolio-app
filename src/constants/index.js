import project1 from '../assets/projects/project-1.jpg';
import project2 from '../assets/projects/project-2.jpg';
import project3 from '../assets/projects/project-3.jpg';

export const HERO_CONTENT = `Привет! Меня зовут Хамзат, мне 24 года и я начинающий frontend-разработчик.`;

export const ABOUT_TEXT = [
  'В 2024 году я окончил университет со степенью бакалавра по направлению "Прикладная информатика". ',

  'Я специализируюсь на таких технологиях, как HTML, CSS, JavaScript, React и Tailwind. Я постоянно совершенствую свои навыки и исследую новые инструменты и технологии для создания более интерактивных и производительных веб-приложений.',

  'В настоящее время я открыт к предложениям удаленной работы.',

  'Если вы ищете целеустремленного и ответственного разработчика, готового решать сложные задачи, буду рад обсудить возможности для сотрудничества!',
];

export const PROJECTS = [
  {
    title: 'E-Commerce Website "Forever"',
    image: project1,
    description:
      'Клиентская часть интернет-магазина одежды "Forever" с каталогом, сортировкой по категориям, карточкой товара, корзиной, оплатой и аутентификацией пользователей.',
    technologies: ['HTML', 'CSS', 'JS', 'React', 'Tailwind'],
    url: 'https://forever-eight.vercel.app',
  },
  {
    title: 'Nike Landing Page',
    image: project2,
    description:
      'Стильная лендинговая страница сайта Nike, полностью адаптированная для мобильных устройств. ',
    technologies: ['HTML', 'CSS', 'JS', 'React', 'Tailwind'],
    url: 'https://nike-landing-page-phi-two.vercel.app',
  },
  {
    title: 'To-Do List App',
    image: project3,
    description:
      'Простое, но функциональное приложение для управления задачами, с функциями добавления, удаления и пометкой задач как выполненных.',
    technologies: ['HTML', 'CSS', 'JS', 'React', 'Tailwind'],
    url: 'https://to-do-list-fawn-tau.vercel.app',
  },
];

export const CONTACT = {
  phoneNo: '+7 (964) 022-92-96 ',
  email: 'justkhamzat@gmail.com',
};
