// src/data/moodCardsData.ts

export type MoodCardData = {
	text: string;
	emoticon: string;
	color: string;
	playlistId: number;
};

export const moodCardsData: MoodCardData[] = [
	{
		text: "Radosny",
		emoticon: "😊",
		color: "yellow",
		playlistId: 1479458365,
	},
	{
		text: "Smutny",
		emoticon: "😢",
		color: "blue",
		playlistId: 1910358422,
	},
	{
		text: "Energiczny",
		emoticon: "⚡",
		color: "salmon",
		playlistId: 2578576804,
	},
	{
		text: "Zrelaksowany",
		emoticon: "😌",
		color: "green",
		playlistId: 1290316405,
	},
	{
		text: "Romantyczny",
		emoticon: "❤️",
		color: "rose",
		playlistId: 1605532135,
	},
	{
		text: "Skupiony",
		emoticon: "🧠",
		color: "purple",
		playlistId: 8749343942,
	},
	{
		text: "Zły",
		emoticon: "😠",
		color: "orange",
		playlistId: 7223922264,
	},
	{
		text: "Senny",
		emoticon: "😴",
		color: "indigo",
		playlistId: 8763295642,
	},
];
