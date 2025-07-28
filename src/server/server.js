import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

const allowedOrigins = [
	"http://localhost:5173",
	"https://moodbasedapp.netlify.app",
];

app.use(
	cors({
		origin: function (origin, callback) {
			if (!origin) return callback(null, true);
			if (allowedOrigins.indexOf(origin) === -1) {
				return callback(
					new Error("CORS policy: ta domena nie jest dozwolona"),
					false
				);
			}
			return callback(null, true);
		},
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
