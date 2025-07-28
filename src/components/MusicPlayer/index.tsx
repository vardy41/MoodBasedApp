import "./index.scss";
import { useMoodCards } from "../../hooks/useMoodCards";
interface MusicPlayerProps {
	playlistId: number;
}

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
						<strong>{track.title}</strong> – {track.artist.name}
						<audio controls src={track.preview}></audio>
					</li>
				))}
			</ul>
		</div>
	);
};
