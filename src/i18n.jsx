import { createContext, useContext, useEffect, useState } from "react";

const dict = {
  uz: {
    nav: { home: "Bosh sahifa", services: "Xizmatlar", projects: "Loyihalar", blog: "Blog", contact: "Aloqa" },
    side: {
      role: "Junior full-stack dasturchi", residence: "Joylashuv", place: "O'zbekiston", freelance: "Frilans", free: "Mavjud",
      langs: ["O'zbek", "Ingliz"], langsTitle: "Tillar", skillsTitle: "Ko'nikmalar", extraTitle: "Qo'shimcha", cv: "CV yuklab olish",
    },
    hero: { hi: "Salom, men", accent: "Full-stack", rest: "dasturchi", sub: "Node.js va React bilan veb-ilovalar yarataman: backenddan tortib deploygacha.", hire: "Boglanish" },
    services: {
      title: "Xizmatlarim", sub: "G'oyadan tayyor mahsulotgacha: interfeys, backend, ma'lumotlar bazasi va deploy.",
      items: [
        { title: "Veb ishlab chiqish", desc: "Landing, CRM, e-commerce" },
        { title: "Backend va API", desc: "Node.js, Express, REST" },
        { title: "Ma'lumotlar bazasi", desc: "PostgreSQL, TypeORM" },
        { title: "Deploy", desc: "Railway, Vercel, Nginx, PM2" },
        { title: "UI dasturlash", desc: "React, Tailwind, animatsiyalar" },
      ],
      ctaTitle: "Birga ishlaymizmi?", ctaText: "Loyihangiz haqida yozing, birgalikda hal qilamiz.", ctaBtn: "Bog'lanish",
    },
    projects: {
      title: "Loyihalar", sub: "Oxirgi ishlarimdan namunalar.", demo: "Demo",
      items: [
        { title: "Repetitor CRM", desc: "Xususiy repetitorlar uchun CRM: o'quvchilar, darslar va to'lovlar." },
        { title: "DoriBot.uz", desc: "Dorixonalarda dori qidirish va narxlarni solishtirish xizmati g'oyasi." },
        { title: "Ijaraly", desc: "Uylarni ijaraga berish yoki qidirsh uchun loyixa" },
      ],
    },
    blog: {
      title: "Blog", sub: "Tajribam haqida qisqa maqolalar.", read: "O'qish →",
      posts: [
        { title: "Express ilovani Railway'ga joylash", desc: "Qadamma-qadam deploy qo'llanmasi.", date: "2026" },
        { title: "TypeORM EntitySchema bilan ishlash", desc: "JavaScript'da entity'lar va bog'lanishlar.", date: "2026" },
        { title: "DigitalOcean'da Nginx va PM2", desc: "Server sozlash va ilovani doim ishlatib turish.", date: "2026" },
      ],
    },
    contact: { title: "Aloqa", sub: "Savol yoki taklifingiz bormi? Yozing.", name: "Ismingiz", email: "Email", msg: "Xabaringiz", send: "Yuborish" },
    footer: "Barcha huquqlar himoyalangan.",
  },
  ru: {
    nav: { home: "Главная", services: "Услуги", projects: "Проекты", blog: "Блог", contact: "Контакты" },
    side: {
      role: "Junior full-stack разработчик", residence: "Место", place: "Узбекистан", freelance: "Фриланс", free: "Доступен",
      langs: ["Узбекский", "Английский"], langsTitle: "Языки", skillsTitle: "Навыки", extraTitle: "Дополнительно", cv: "Скачать резюме",
    },
    hero: { hi: "Привет, я", accent: "Full-stack", rest: "разработчик", sub: "Создаю веб-приложения на Node.js и React: от бэкенда до деплоя.", hire: "Связь" },
    services: {
      title: "Мои услуги", sub: "От идеи до готового продукта: интерфейс, бэкенд, база данных и деплой.",
      items: [
        { title: "Веб-разработка", desc: "Лендинги, CRM, e-commerce" },
        { title: "Бэкенд и API", desc: "Node.js, Express, REST" },
        { title: "Базы данных", desc: "PostgreSQL, TypeORM" },
        { title: "Деплой", desc: "Railway, Vercel, Nginx, PM2" },
        { title: "UI-разработка", desc: "React, Tailwind, анимации" },
      ],
      ctaTitle: "Поработаем вместе?", ctaText: "Расскажите о проекте, и мы всё решим.", ctaBtn: "Связаться",
    },
    projects: {
      title: "Проекты", sub: "Примеры моих последних работ.", demo: "Демо",
      items: [
        { title: "Repetitor CRM", desc: "CRM для частных репетиторов: ученики, занятия и оплаты." },
        { title: "DoriBot.uz", desc: "Идея сервиса поиска лекарств и сравнения цен в аптеках." },
        { title: "Ijaraly", desc: "Проект для аренды или поиска жилья" },
      ],
    },
    blog: {
      title: "Блог", sub: "Короткие заметки о моём опыте.", read: "Читать →",
      posts: [
        { title: "Деплой Express-приложения на Railway", desc: "Пошаговое руководство по деплою.", date: "2026" },
        { title: "TypeORM EntitySchema на JavaScript", desc: "Сущности и связи без TypeScript.", date: "2026" },
        { title: "Nginx и PM2 на DigitalOcean", desc: "Настройка сервера и постоянная работа приложения.", date: "2026" },
      ],
    },
    contact: { title: "Контакты", sub: "Есть вопрос или предложение? Напишите.", name: "Ваше имя", email: "Email", msg: "Сообщение", send: "Отправить" },
    footer: "Все права защищены.",
  },
  en: {
    nav: { home: "Home", services: "Services", projects: "Projects", blog: "Blog", contact: "Contact" },
    side: {
      role: "Junior full-stack developer", residence: "Residence", place: "Uzbekistan", freelance: "Freelance", free: "Available",
      langs: ["Uzbek", "English"], langsTitle: "Languages", skillsTitle: "Skills", extraTitle: "Extra skills", cv: "Download CV",
    },
    hero: { hi: "I'm", accent: "Full-stack", rest: "Developer", sub: "I build web apps with Node.js and React, from the backend to deployment.", hire: "Hire me" },
    services: {
      title: "My Services", sub: "From idea to finished product: interface, backend, database and deployment.",
      items: [
        { title: "Web Development", desc: "Landing, CRM, e-commerce" },
        { title: "Backend & API", desc: "Node.js, Express, REST" },
        { title: "Databases", desc: "PostgreSQL, TypeORM" },
        { title: "Deployment", desc: "Railway, Vercel, Nginx, PM2" },
        { title: "UI Development", desc: "React, Tailwind, animations" },
      ],
      ctaTitle: "Let's work together?", ctaText: "Tell me about your project and we'll sort it out.", ctaBtn: "Contact me",
    },
    projects: {
      title: "Projects", sub: "Samples of my recent work.", demo: "Demo",
      items: [
        { title: "Repetitor CRM", desc: "A CRM for private tutors: students, lessons and payments." },
        { title: "DoriBot.uz", desc: "A pharmacy drug search and price comparison service concept." },
        { title: "Ijaraly", desc: "A project for renting out or finding homes." },
      ],
    },
    blog: {
      title: "Blog", sub: "Short notes from my experience.", read: "Read →",
      posts: [
        { title: "Deploying an Express app to Railway", desc: "A step-by-step deployment guide.", date: "2026" },
        { title: "TypeORM EntitySchema in JavaScript", desc: "Entities and relations without TypeScript.", date: "2026" },
        { title: "Nginx and PM2 on DigitalOcean", desc: "Server setup and keeping your app alive.", date: "2026" },
      ],
    },
    contact: { title: "Contact", sub: "Have a question or an offer? Write to me.", name: "Your name", email: "Email", msg: "Your message", send: "Send" },
    footer: "All rights reserved.",
  },
};

const Ctx = createContext();
export const useI18n = () => useContext(Ctx);

export function I18nProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("lang") || "uz");
  useEffect(() => {
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);
  return <Ctx.Provider value={{ lang, setLang, t: dict[lang] }}>{children}</Ctx.Provider>;
}
