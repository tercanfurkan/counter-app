import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

import counterRoutes from './routes/routes';
import connectDB from './config/db';

// Connect MongoDB
connectDB();

// Configure web middleware
const app: Express = express();
app.use(express.json());
app.options(
    '*',
    cors({
        optionsSuccessStatus: 200
    })
);
app.use(cors());

// Mount routes
app.use(counterRoutes);

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);

const mountRoutes = (app: Express) => {
    app.use(counterRoutes);
};

const configureWebMiddleware = (app: Express) => {};

export default app;
