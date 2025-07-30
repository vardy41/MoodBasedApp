import type { TrackProps } from "../types/types";
import { useQuery } from "@tanstack/react-query";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const fetchPlayList = async (
	playlistId: number
): Promise<TrackProps[]> => {
	const res = await fetch(`${backendUrl}/api/playList/${playlistId}`);
	if (!res.ok) throw new Error("Błąd pobierania danych");
	const json = await res.json();
	return json.tracks.data;
};

export const useMoodCards = (playlistId: number) => {
	const query = useQuery({
		queryKey: ["playlist", playlistId],
		queryFn: () => fetchPlayList(playlistId),
		staleTime: 1000 * 60 * 5, // cache 5 minut
	});
	return {
		data: query.data || [],
		loading: query.isLoading,
		error: query.error?.message ?? null,
	};
};
