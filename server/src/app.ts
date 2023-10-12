import express, { Express, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config';

import authRoutes from './routes/auth';
import userRoutes from './routes/users';
import connectDB from './config/db';

const API_BASE_PATH = process.env.API_BASE_PATH || '/api/v1';

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
app.use(API_BASE_PATH, authRoutes);
app.use(API_BASE_PATH, userRoutes);

const PORT = process.env.PORT || 4000;
const server = app.listen(PORT, () =>
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
);

const mountRoutes = (app: Express) => {
    app.use(authRoutes);
};

const configureWebMiddleware = (app: Express) => {};

export default app;
