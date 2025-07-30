export type MoodCardProps = {
	text: string;
	color: string;
	emoticon: string;
	onClick: () => void;
	onMouseEnter?: () => void;
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
