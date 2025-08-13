import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';

// const user = require("./routes/userRoutes.js")
// const temple = require("../routes/templeRoute.js")
// const puja = require("../routes/pujaRoutes.js")
// const booking = require("./routes/bookingRoutes.js")

import userRoutes from './routes/userRoutes.js';
import templeRoute from './routes/templeRoute.js';
import pujaRoutes from './routes/pujaRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/temples', templeRoute);
app.use('/api/pujas', pujaRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
