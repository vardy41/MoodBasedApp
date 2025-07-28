import "./index.scss";
import { useMoodCards } from "../../hooks/useMoodCards";
import type { MusicPlayerProps } from "../../types/types";

export const MusicPlayer = ({ playlistId }: MusicPlayerProps) => {
	const { data, loading, error } = useMoodCards(playlistId);

	if (loading)
		return <div className="music_player">Ładowanie playlisty...</div>;
	if (error) return <div className="music_player">Błąd: {error}</div>;

	return (
		<div className="music_player">
			<h3 className="music_player_heading">Playlista</h3>
			<ul className="music_player_list">
				{data.map((track) => (
					<li className="music_player_list-item" key={track.id}>
						<p className="music_player_list-item-paragraph">
							{track.title} – {track.artist.name}
						</p>
						{track.preview ? (
							<audio controls src={track.preview}></audio>
						) : (
							<p className="unavailable">Podgląd niedostępny</p>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};
