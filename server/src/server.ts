import { app } from "./app.js";
import dotenv from "dotenv";

dotenv.config();

app.listen(process.env.PORT, () => {
    console.log("express serveris paleistas ant porto: " + process.env.PORT);
});