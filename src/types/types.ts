export type MoodCardProps = {
	text: string;
	color: string;
	emoticon: string;
	onClick: () => void;
};
export type TrackProps = {
	id: number;
	title: string;
	preview: string;
	artist: {
		name: string;
	};
};

export type MusicPlayerProps = {
	playlistId: number;
};
