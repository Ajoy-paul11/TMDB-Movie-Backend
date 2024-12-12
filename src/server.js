import { app } from "./app.js";
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config(
    { path: "./.env" }
)

connectDB()
    .then(() => {
        app.on("error", (error) => {
            console.error("Error: ", error)
        })

        app.listen(process.env.PORT || 5000, () => {
            console.log("Server is running on port " + process.env.PORT);
        });
    }).catch((error) => console.error("DB connection failed: ", error))




app.get("/", (req, res) => {
    res.send("Hello from Movie Backend");
});