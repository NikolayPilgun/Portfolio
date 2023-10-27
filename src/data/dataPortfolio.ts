// cosmeticsStore
import cosmeticsStore1 from "./portfolio/Cosmetics/cosmetics1.png";
import cosmeticsStore2 from "./portfolio/Cosmetics/cosmetics2.png";
import cosmeticsStore3 from "./portfolio/Cosmetics/cosmetics3.png";
// cosmeticsStore
// fitnessClub
import fitnessClub1 from "./portfolio/Fitness/fitness1.png";
import fitnessClub2 from "./portfolio/Fitness/fitness2.png";
import fitnessClub3 from "./portfolio/Fitness/fitness3.png";
// fitnessClub

// buildingHouse
import buildingHouse1 from "./portfolio/buildingHouse/buildingHouse1.png";
import buildingHouse3 from "./portfolio/buildingHouse/buildingHouse2.png";
import buildingHouse2 from "./portfolio/buildingHouse/buildingHouse3.png";
import buildingHouse4 from "./portfolio/buildingHouse/buildingHouse4.png";
import buildingHouse5 from "./portfolio/buildingHouse/buildingHouse5.png";
import buildingHouse6 from "./portfolio/buildingHouse/buildingHouse6.png";
import buildingHouse7 from "./portfolio/buildingHouse/buildingHouse7.png";
// buildingHouse
// carShop
import carShop1 from "./portfolio/carShop/carShop1.png";
import carShop2 from "./portfolio/carShop/carShop2.png";
// carShop
// popularBooks
import popularBooks3 from "./portfolio/nextProject/nextProject1.png";
import popularBooks4 from "./portfolio/nextProject/nextProject2.png";
import popularBooks1 from "./portfolio/nextProject/nextProject3.png";
import popularBooks2 from "./portfolio/nextProject/nextProject4.png";
import popularBooks5 from "./portfolio/nextProject/nextProject5.png";
import popularBooks6 from "./portfolio/nextProject/nextProject6.png";
import popularBooks7 from "./portfolio/nextProject/nextProject7.png";
// popularBooks

// foodStore
import foodStore1 from "./portfolio/reactFood/reactFood1.png";
import foodStore2 from "./portfolio/reactFood/reactFood2.png";
import foodStore3 from "./portfolio/reactFood/reactFood3.png";
import foodStore4 from "./portfolio/reactFood/reactFood4.png";
// foodStore
// pizzeriaStore
import pizzeriaStore1 from "./portfolio/reactPizza/reactPizza1.png";
import pizzeriaStore2 from "./portfolio/reactPizza/reactPizza2.png";
import pizzeriaStore3 from "./portfolio/reactPizza/reactPizza3.png";
// pizzeriaStore

// clothingStore
import clothingStore1 from "./portfolio/shopOnePage/shopOnePage1.png";
import clothingStore2 from "./portfolio/shopOnePage/shopOnePage2.png";
import clothingStore3 from "./portfolio/shopOnePage/shopOnePage3.png";
import clothingStore4 from "./portfolio/shopOnePage/shopOnePage4.png";
import clothingStore5 from "./portfolio/shopOnePage/shopOnePage5.png";
// clothingStore
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
	pictures: string[];
}

export const siteCardData: ISiteCard[] = [
	{
		id: 1,
		name: "NextJS",
		siteType: "Магазин по продаже автомобилей",
		path: "carShop",
		pictures: [carShop1, carShop2],
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
	},
	{
		id: 5,
		name: "ReactJS",
		siteType: "Интернет-магазин пиццерии",
		path: "pizzeriaStore",
		pictures: [pizzeriaStore1, pizzeriaStore2, pizzeriaStore3],
	},
	{
		id: 6,
		name: "ReactJS",
		siteType: "Простой магазин косметики",
		path: "cosmeticsStore",
		pictures: [cosmeticsStore1, cosmeticsStore2, cosmeticsStore3],
	},
	{
		id: 7,
		name: "ReactJS",
		siteType: "Фитнес-клуб",
		path: "fitnessClub",
		pictures: [fitnessClub1, fitnessClub2, fitnessClub3],
	},
	{
		id: 8,
		name: "NextJS",
		siteType: "Интернет-магазин еды",
		path: "foodStore",
		pictures: [foodStore1, foodStore2, foodStore3, foodStore4],
	},
];
