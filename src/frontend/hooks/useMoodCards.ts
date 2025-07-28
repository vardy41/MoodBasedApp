import { useEffect, useState } from "react";
import type { TrackProps } from "../types/types";

export const useMoodCards = (playlistId: number) => {
	const [data, setData] = useState<TrackProps[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const backendUrl = import.meta.env.VITE_BACKEND_URL;
	useEffect(() => {
		const fetchData = async () => {
			try {
				setLoading(true);

				const res = await fetch(`${backendUrl}/api/playlist/${playlistId}`);

				if (!res.ok) throw new Error("Błąd pobierania danych");
				const json = await res.json();
				setData(json.tracks.data); // <- lista utworów
			} catch (err: any) {
				setError(err.message || "Coś poszło nie tak");
			} finally {
				setLoading(false);
			}
		};

		if (playlistId) {
			fetchData();
		}
	}, [playlistId]);

	return { data, loading, error };
};
