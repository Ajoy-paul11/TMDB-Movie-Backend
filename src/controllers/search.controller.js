import { fetchFromTMDB } from "../services/tmdb.service.js";


export async function searchMovie(req, res) {
    const { query } = req.params;
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`);
        res.json({ success: true, content: data.results });
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}