🎵 **Mood-Based Music App**  
A **full-stack music web application** that dynamically plays playlists based on your mood. It uses the **Deezer API** to fetch mood-specific music, with a custom backend proxy and a clean, modern frontend UI.  
🟢 **Live demo:** https://moodbasedapp.netlify.app

---

### Tech Stack:

**Frontend:** React, TypeScript, Vite, React Query, SCSS

**Backend:** Node.js, Express (hosted on Render)

**Data Source:** Deezer API

**Deployment:** Netlify (frontend), Render (backend)

---

### Project Structure:

mood-based/  
├── frontend/  # React + Vite frontend app  
├── server/    # Node.js + Express backend  
├── package.json  # Combined dependencies  
├── README.md

---

### Installation:

**Clone the repository:**  
git clone https://github.com/your-username/mood-based.git  
cd mood-based

**Install all dependencies:**  
npm install

---

### Running Locally:

You only need to run the frontend locally. The backend is hosted on Render.

**Start the frontend:**  
cd frontend  
npm run dev

The app will run at http://localhost:5173

Create a `.env` file inside the frontend/ directory with the following content:  
VITE_BACKEND_URL=https://your-backend.onrender.com

---

### If you prefer to run the backend locally:

cd server  
node server.js  

It will run at http://localhost:3001

---

### Features:

- ✅ Mood-based playlist selection  
- ✅ React Query data prefetching and caching  
- ✅ SCSS styling  
- ✅ Audio previews using HTML5 <audio>  
- ✅ Optimized network usage (prefetch on first hover)  
- ✅ Backend proxy for Deezer API with CORS protection  

---

### Deployment:

Frontend: [https://moodbasedapp.netlify.app  ](https://www.netlify.com/)
Backend: [https://your-backend.onrender.com](https://render.com/)
