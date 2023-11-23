export interface ISocialData {
	linkTo: string;
	imgSrc: string;
	imgAlt: string;
	spanTitle?: string;
}
export const socialData: ISocialData[] = [
	{
		linkTo: "mailto:03198814@mail.ru",
		imgSrc: "pictures/e-mail.png",
		imgAlt: "e-mail",
	},
	{
		linkTo: "https://github.com/NikolayPilgun",
		imgSrc: "pictures/github.png",
		imgAlt: "github",
	},
	{
		linkTo: "https://t.me/NikolayPilgun",
		imgSrc: "pictures/telegram.png",
		imgAlt: "telegram",
		spanTitle: "@NikolayPilgun",
	},
	{
		linkTo: "https://vk.com/nikolaypilgun",
		imgSrc: "pictures/vk.png",
		imgAlt: "vk",
		spanTitle: "nikolaypilgun",
	},
];
