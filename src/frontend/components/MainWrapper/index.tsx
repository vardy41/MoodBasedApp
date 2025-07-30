import { fetchPlayList } from "../../hooks/useMoodCards";
import { useQueryClient } from "@tanstack/react-query";
import { MusicPlayer } from "../MusicPlayer";
import { useState } from "react";
import { moodCardsData } from "../../data/moodCardsData";
import { MoodCard } from "../MoodCard";
import "./index.scss";

export const MainWrapper = () => {
	const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(
		null
	);
	const queryClient = useQueryClient();

	const handleMouseEnter = (playlistId: string) => {
		const id = Number(playlistId);
		queryClient.prefetchQuery({
			queryKey: ["playlist", id],
			queryFn: () => fetchPlayList(id),
		});
	};

	return (
		<main className="main">
			<h2 className="main_heading">Jak się dziś czujesz ?</h2>
			<ul className="main_list">
				{moodCardsData.map((cardObj, index) => (
					<MoodCard
						key={index}
						color={cardObj.color}
						text={cardObj.text}
						emoticon={cardObj.emoticon}
						onClick={() => setSelectedPlaylistId(cardObj.playlistId)}
						onMouseEnter={() => handleMouseEnter(cardObj.playlistId)}
					/>
				))}
			</ul>
			{selectedPlaylistId && (
				<MusicPlayer playlistId={Number(selectedPlaylistId)} />
			)}
		</main>
	);
};

export default MainWrapper;
