// cosmeticsStore
import cosmeticsStore1 from "./portfolio/Cosmetics/cosmetics1.png";
import cosmeticsStore2 from "./portfolio/Cosmetics/cosmetics2.png";
import cosmeticsStore3 from "./portfolio/Cosmetics/cosmetics3.png";

// fitnessClub
import fitnessClub1 from "./portfolio/Fitness/fitness1.png";
import fitnessClub2 from "./portfolio/Fitness/fitness2.png";
import fitnessClub3 from "./portfolio/Fitness/fitness3.png";

// buildingHouse
import buildingHouse1 from "./portfolio/buildingHouse/buildingHouse1.png";
import buildingHouse3 from "./portfolio/buildingHouse/buildingHouse2.png";
import buildingHouse2 from "./portfolio/buildingHouse/buildingHouse3.png";
import buildingHouse4 from "./portfolio/buildingHouse/buildingHouse4.png";
import buildingHouse5 from "./portfolio/buildingHouse/buildingHouse5.png";
import buildingHouse6 from "./portfolio/buildingHouse/buildingHouse6.png";
import buildingHouse7 from "./portfolio/buildingHouse/buildingHouse7.png";

// carShop
import carShop1 from "./portfolio/carShop/carShop1.png";
import carShop2 from "./portfolio/carShop/carShop2.png";

// popularBooks
import popularBooks3 from "./portfolio/nextProject/nextProject1.png";
import popularBooks4 from "./portfolio/nextProject/nextProject2.png";
import popularBooks1 from "./portfolio/nextProject/nextProject3.png";
import popularBooks2 from "./portfolio/nextProject/nextProject4.png";
import popularBooks5 from "./portfolio/nextProject/nextProject5.png";
import popularBooks6 from "./portfolio/nextProject/nextProject6.png";
import popularBooks7 from "./portfolio/nextProject/nextProject7.png";

// foodStore
import foodStore1 from "./portfolio/reactFood/reactFood1.png";
import foodStore2 from "./portfolio/reactFood/reactFood2.png";
import foodStore3 from "./portfolio/reactFood/reactFood3.png";
import foodStore4 from "./portfolio/reactFood/reactFood4.png";

// pizzeriaStore
import pizzeriaStore1 from "./portfolio/reactPizza/reactPizza1.png";
import pizzeriaStore2 from "./portfolio/reactPizza/reactPizza2.png";
import pizzeriaStore3 from "./portfolio/reactPizza/reactPizza3.png";

// clothingStore
import clothingStore1 from "./portfolio/shopOnePage/shopOnePage1.png";
import clothingStore2 from "./portfolio/shopOnePage/shopOnePage2.png";
import clothingStore3 from "./portfolio/shopOnePage/shopOnePage3.png";
import clothingStore4 from "./portfolio/shopOnePage/shopOnePage4.png";
import clothingStore5 from "./portfolio/shopOnePage/shopOnePage5.png";

// Portfolio
import portfolio1 from "./portfolio/portfolio/Portfolio1.png";
import portfolio2 from "./portfolio/portfolio/Portfolio2.png";
import portfolio3 from "./portfolio/portfolio/Portfolio3.png";
import portfolio4 from "./portfolio/portfolio/Portfolio4.png";
import portfolio5 from "./portfolio/portfolio/Portfolio5.png";
import portfolio6 from "./portfolio/portfolio/Portfolio6.png";
import portfolio7 from "./portfolio/portfolio/Portfolio7.png";

export interface IFilter {
	name: string;
}

export const filterData: IFilter[] = [
	{
		name: "Все работы",
	},
	{
		name: "NextJS",
	},
	{
		name: "ReactJS",
	},
];
export interface ISiteTTX {
	title: string;
	content: string;
}

export interface ISiteCard {
	id: number;
	name: string;
	siteType: string;
	path: string;
	pictures: string[];
	github: string;
	siteTTX: ISiteTTX[];
}

export const siteCardData: ISiteCard[] = [
	{
		id: 1,
		name: "NextJS",
		siteType: "Магазин по продаже автомобилей",
		path: "carShop",
		pictures: [carShop1, carShop2],
		github: "https://github.com/NikolayPilgun/car-shop",
		siteTTX: [
			{
				title: "Вид сайта",
				content: "Сайт-визитка",
			},
			{
				title: "Язык разработки",
				content: "JavaScript",
			},
			{
				title: "Фреймворк / библиотека",
				content: "NextJS",
			},
			{
				title: "Язык стилей",
				content: "Tailwind CSS",
			},
			{
				title: "TypeScript",
				content: "Да",
			},
			{
				title: "Адаптивный сайт",
				content: "Да",
			},
			{
				title: "Примечание",
				content: "Для работы сайта необходимо использовать JSON Server",
			},
		],
	},
	{
		id: 2,
		name: "ReactJS",
		siteType: "Магазин женской одежды",
		path: "clothingStore",
		pictures: [
			clothingStore1,
			clothingStore2,
			clothingStore3,
			clothingStore4,
			clothingStore5,
		],
		github: "https://github.com/NikolayPilgun/shop-one-page",
		siteTTX: [
			{
				title: "Вид сайта",
				content: "Корпоративный имиджевый web-сайт",
			},
			{
				title: "Язык разработки",
				content: "JavaScript",
			},
			{
				title: "Фреймворк / библиотека",
				content: "ReactJS",
			},
			{
				title: "Язык стилей",
				content: "CSS module",
			},
			{
				title: "Доп. библиотеки",
				content: "React Router DOM v6",
			},
			{
				title: "TypeScript",
				content: "Нет",
			},
			{
				title: "Адаптивный сайт",
				content: "Нет",
			},
		],
	},
	{
		id: 3,
		name: "NextJS",
		siteType: "Популярные книги (блог)",
		path: "popularBooks",
		pictures: [
			popularBooks1,
			popularBooks2,
			popularBooks3,
			popularBooks4,
			popularBooks5,
			popularBooks6,
			popularBooks7,
		],
		github: "https://github.com/NikolayPilgun/next-13-project",
		siteTTX: [
			{
				title: "Вид сайта",
				content: "Информационный сайт / Блог",
			},
			{
				title: "Язык разработки",
				content: "JavaScript",
			},
			{
				title: "Фреймворк / библиотека",
				content: "NextJS",
			},
			{
				title: "Язык стилей",
				content: "Tailwind CSS",
			},
			{
				title: "Доп. библиотеки",
				content: "NextAuth.js, Zod, React Hook Form",
			},
			{
				title: "TypeScript",
				content: "Да",
			},
			{
				title: "Адаптивный сайт",
				content: "Да",
			},
			{
				title: "Примечание",
				content: "Для работы сайта необходимо использовать JSON Server",
			},
		],
	},
	{
		id: 4,
		name: "ReactJS",
		siteType: "Строительная компания",
		path: "buildingHouse",
		pictures: [
			buildingHouse1,
			buildingHouse2,
			buildingHouse3,
			buildingHouse4,
			buildingHouse5,
			buildingHouse6,
			buildingHouse7,
		],
		github: "https://github.com/NikolayPilgun/BuildingHouse",
		siteTTX: [
			{
				title: "Вид сайта",
				content: "Корпоративный имиджевый web-сайт",
			},
			{
				title: "Язык разработки",
				content: "JavaScript",
			},
			{
				title: "Фреймворк / библиотека",
				content: "ReactJS",
			},
			{
				title: "Язык стилей",
				content: "SCSS module",
			},
			{
				title: "Доп. библиотеки",
				content: "Swiper, Framer Motion, React Hook Form, React Router DOM v6",
			},
			{
				title: "TypeScript",
				content: "Да",
			},
			{
				title: "Адаптивный сайт",
				content: "Да",
			},
			{
				title: "Примечание",
				content: "Для работы сайта необходимо использовать JSON Server",
			},
		],
	},
	{
		id: 5,
		name: "ReactJS",
		siteType: "Интернет-магазин пиццерии",
		path: "pizzeriaStore",
		pictures: [pizzeriaStore1, pizzeriaStore2, pizzeriaStore3],
		github: "https://github.com/NikolayPilgun/ReactPizza",
		siteTTX: [
			{
				title: "Вид сайта",
				content: "Интернет-магазин",
			},
			{
				title: "Язык разработки",
				content: "JavaScript",
			},
			{
				title: "Фреймворк / библиотека",
				content: "ReactJS",
			},
			{
				title: "Язык стилей",
				content: "SCSS module",
			},
			{
				title: "Доп. библиотеки",
				content: "Redux Toolkit, Axios, React Router DOM v6",
			},
			{
				title: "TypeScript",
				content: "Да",
			},
			{
				title: "Адаптивный сайт",
				content: "Нет",
			},
			{
				title: "Примечание",
				content: "Данный сайт разработан на основе YouTube курса",
			},
		],
	},
	{
		id: 6,
		name: "ReactJS",
		siteType: "Простой магазин косметики",
		path: "cosmeticsStore",
		pictures: [cosmeticsStore1, cosmeticsStore2, cosmeticsStore3],
		github: "https://github.com/NikolayPilgun/ReactCosmetics",
		siteTTX: [
			{
				title: "Вид сайта",
				content: "Сайт-визитка",
			},
			{
				title: "Язык разработки",
				content: "JavaScript",
			},
			{
				title: "Фреймворк / библиотека",
				content: "ReactJS",
			},
			{
				title: "Язык стилей",
				content: "SCSS module",
			},
			{
				title: "Доп. библиотеки",
				content: "Swiper, Framer Motion, AutoAnimate",
			},
			{
				title: "TypeScript",
				content: "Да",
			},
			{
				title: "Адаптивный сайт",
				content: "Да",
			},
			{
				title: "Примечание",
				content: "Данный сайт создан на основе YouTube курса",
			},
		],
	},
	{
		id: 7,
		name: "ReactJS",
		siteType: "Фитнес-клуб",
		path: "fitnessClub",
		pictures: [fitnessClub1, fitnessClub2, fitnessClub3],
		github: "https://github.com/NikolayPilgun/FitnessClub",
		siteTTX: [
			{
				title: "Вид сайта",
				content: "Сайт-визитка",
			},
			{
				title: "Язык разработки",
				content: "JavaScript",
			},
			{
				title: "Фреймворк / библиотека",
				content: "ReactJS",
			},
			{
				title: "Язык стилей",
				content: "CSS module",
			},
			{
				title: "Доп. библиотеки",
				content: "EmailJS, Framer Motion",
			},
			{
				title: "TypeScript",
				content: "Нет",
			},
			{
				title: "Адаптивный сайт",
				content: "Да",
			},
			{
				title: "Примечание",
				content: "Данный сайт создан на основе YouTube курса",
			},
		],
	},
	{
		id: 8,
		name: "NextJS",
		siteType: "Интернет-магазин еды",
		path: "foodStore",
		pictures: [foodStore1, foodStore2, foodStore3, foodStore4],
		github: "https://github.com/NikolayPilgun/ReactFood",
		siteTTX: [
			{
				title: "Вид сайта",
				content: "Интернет-магазин",
			},
			{
				title: "Язык разработки",
				content: "JavaScript",
			},
			{
				title: "Фреймворк / библиотека",
				content: "NextJS",
			},
			{
				title: "Язык стилей",
				content: "CSS module",
			},
			{
				title: "Доп. библиотеки",
				content: "Zustand, Sanity, Stripe",
			},
			{
				title: "TypeScript",
				content: "Нет",
			},
			{
				title: "Адаптивный сайт",
				content: "Нет",
			},
			{
				title: "Примечание",
				content: "Данный сайт создан на основе YouTube курса",
			},
		],
	},
	{
		id: 9,
		name: "ReactJS",
		siteType: "Сайт-портфолио",
		path: "portfolioPage",
		pictures: [
			portfolio1,
			portfolio4,
			portfolio2,
			portfolio3,
			portfolio5,
			portfolio6,
			portfolio7,
		],
		github: "https://github.com/NikolayPilgun/Portfolio",
		siteTTX: [
			{
				title: "Вид сайта",
				content: "Сайт-визитка",
			},
			{
				title: "Язык разработки",
				content: "JavaScript",
			},
			{
				title: "Фреймворк / библиотека",
				content: "ReactJS",
			},
			{
				title: "Язык стилей",
				content: "Tailwind CSS",
			},
			{
				title: "Доп. библиотеки",
				content: "EmailJS, Zod, Framer Motion, React Router DOM v6",
			},
			{
				title: "TypeScript",
				content: "Да",
			},
			{
				title: "Адаптивный сайт",
				content: "Да",
			},
		],
	},
];
