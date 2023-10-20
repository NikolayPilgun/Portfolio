import cosmeticsStore1 from "./portfolio/Cosmetics/cosmetics1.png";
import cosmeticsStore2 from "./portfolio/Cosmetics/cosmetics2.png";
import fitnessClub1 from "./portfolio/Fitness/fitness1.png";
import fitnessClub2 from "./portfolio/Fitness/fitness2.png";
import buildingHouse1 from "./portfolio/buildingHouse/buildingHouse1.png";
import buildingHouse2 from "./portfolio/buildingHouse/buildingHouse3.png";
import carShop1 from "./portfolio/carShop/carShop1.png";
import carShop2 from "./portfolio/carShop/carShop2.png";
import popularBooks1 from "./portfolio/nextProject/nextProject3.png";
import popularBooks2 from "./portfolio/nextProject/nextProject4.png";
import foodStore1 from "./portfolio/reactFood/reactFood1.png";
import foodStore2 from "./portfolio/reactFood/reactFood2.png";
import pizzeriaStore1 from "./portfolio/reactPizza/reactPizza1.png";
import pizzeriaStore2 from "./portfolio/reactPizza/reactPizza2.png";
import clothingStore1 from "./portfolio/shopOnePage/shopOnePage1.png";
import clothingStore2 from "./portfolio/shopOnePage/shopOnePage2.png";

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

export interface ISiteCard {
	id: number;
	name: string;
	siteType: string;
	path: string;
	firstPicture: string;
	secondPicture: string;
}

export const siteCardData: ISiteCard[] = [
	{
		id: 1,
		name: "NextJS",
		siteType: "Магазин по продаже автомобилей",
		path: "carShop",
		firstPicture: carShop1,
		secondPicture: carShop2,
	},
	{
		id: 2,
		name: "ReactJS",
		siteType: "Магазин женской одежды",
		path: "clothingStore",
		firstPicture: clothingStore1,
		secondPicture: clothingStore2,
	},
	{
		id: 3,
		name: "NextJS",
		siteType: "Популярные книги (блог)",
		path: "popularBooks",
		firstPicture: popularBooks1,
		secondPicture: popularBooks2,
	},
	{
		id: 4,
		name: "ReactJS",
		siteType: "Строительная компания",
		path: "buildingHouse",
		firstPicture: buildingHouse1,
		secondPicture: buildingHouse2,
	},
	{
		id: 5,
		name: "ReactJS",
		siteType: "Интернет-магазин пиццерии",
		path: "pizzeriaStore",
		firstPicture: pizzeriaStore1,
		secondPicture: pizzeriaStore2,
	},
	{
		id: 6,
		name: "ReactJS",
		siteType: "Простой магазин косметики",
		path: "cosmeticsStore",
		firstPicture: cosmeticsStore1,
		secondPicture: cosmeticsStore2,
	},
	{
		id: 7,
		name: "ReactJS",
		siteType: "Фитнес-клуб",
		path: "fitnessClub",
		firstPicture: fitnessClub1,
		secondPicture: fitnessClub2,
	},
	{
		id: 8,
		name: "NextJS",
		siteType: "Интернет-магазин еды",
		path: "foodStore",
		firstPicture: foodStore1,
		secondPicture: foodStore2,
	},
];
