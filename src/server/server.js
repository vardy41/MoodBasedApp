import express from "express";
import fetch from "node-fetch";
import cors from "cors";
const app = express();
const PORT = 3001;

app.use(
	cors({
		origin: "http://localhost:5173",
	})
);

app.get("/api/playlist/:id", async (req, res) => {
	const playlistId = req.params.id;
	try {
		const response = await fetch(
			`https://api.deezer.com/playlist/${playlistId}`
		);
		const data = await response.json();
		res.json(data);
	} catch (error) {
		res.status(500).json({ error: "Błąd pobierania danych" });
	}
});

app.listen(PORT, () => {
	console.log(`Serwer proxy działa na porcie ${PORT}`);
});
