import { MusicPlayer } from "../MusicPlayer";
import { useState } from "react";
import { moodCardsData } from "../../data/moodCardsData";
import { MoodCard } from "../MoodCard";
import "./index.scss";

export const MainWrapper = () => {
	// Zmieniamy stan, żeby przechowywał playlistId zamiast text
	const [selectedPlaylistId, setSelectedPlaylistId] = useState<string | null>(
		null
	);

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
					/>
				))}
			</ul>
			{selectedPlaylistId && (
				// Przekazujemy playlistId (jako number konwertujemy, bo w hooku jest number)
				<MusicPlayer playlistId={Number(selectedPlaylistId)} />
			)}
		</main>
	);
};
