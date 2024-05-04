export interface INavBar {
	name: string;
	path: string;
}

export const navBarData: INavBar[] = [
	{ name: "Главная", path: "/" },
	{ name: "Обо мне", path: "aboutMe" },
	{ name: "Портфолио", path: "portfolio" },
	{ name: "Контакты", path: "contacts" },
];
