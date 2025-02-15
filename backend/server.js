import express from 'express';
import dotenv from 'dotenv';
import router from './routes/auth.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
    res.send('Hello, World!!');
});

app.use("/api/auth", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
