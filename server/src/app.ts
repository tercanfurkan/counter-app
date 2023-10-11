import express, { Express, NextFunction, Request, Response } from 'express'
import cors from 'cors'
import counterRoutes from './routes';

const app: Express = express();
app.use(express.json())
app.options('*', cors({
    optionsSuccessStatus: 200
}));
app.use(cors());
app.use(counterRoutes);
app.use("/", (req: Request, res: Response, next: NextFunction): void => {
    res.json({ message: "No resource here!" });
  });
app.listen(4000, () => console.log('Server running'));

export default app
