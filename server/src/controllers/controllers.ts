import { Response, Request } from 'express';
import User from '../models/User';

const counters: Record<string, number> = {};

const getCounters = async (req: Request, res: Response): Promise<void> => {
    try {
        res.status(200).json({ counters });
    } catch (error) {
        throw error;
    }
};

// @desc Create user
// @route POST /login
// @access Private
const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, password } = req.body;
        counters[username] = counters[username] || 0;
        const user = await User.create({
            username,
            password
        });

        res.status(201).json({
            username
        });
    } catch (error) {
        throw error;
    }
};

const increaseCounter = async (req: Request, res: Response): Promise<void> => {
    try {
        const username = req.params.username;
        counters[username] += 1;
        res.status(200).json({ counters });
    } catch (error) {
        throw error;
    }
};

export { getCounters, createUser, increaseCounter };
