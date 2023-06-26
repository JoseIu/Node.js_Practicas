import dotenv from 'dotenv';
import express from 'express';
import userRoutes from './routes/users.routes.js';
dotenv.config();
// const PORT = 3000;
const app = express();

app.use(express.json());
app.use(userRoutes);

app.listen(process.env.PORT, () => {
	console.log(`Servidor levantado en el puerto ${process.env.PORT}`);
});
