export interface ISocialData {
	linkTo: string;
	imgSrc: string;
	imgAlt: string;
	spanTitle?: string;
}
export const socialData: ISocialData[] = [
	{
		linkTo: "mailto:03198814@mail.ru",
		imgSrc: "contacts/e-mail.png",
		imgAlt: "e-mail",
	},
	{
		linkTo: "https://github.com/NikolayPilgun",
		imgSrc: "contacts/github.png",
		imgAlt: "github",
	},
	{
		linkTo: "https://t.me/NikolayPilgun",
		imgSrc: "contacts/telegram.png",
		imgAlt: "telegram",
		spanTitle: "@NikolayPilgun",
	},
	{
		linkTo: "https://vk.com/id830020894",
		imgSrc: "contacts/vk.png",
		imgAlt: "vk",
		spanTitle: "id830020894",
	},
];
