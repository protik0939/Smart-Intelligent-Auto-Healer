// backend/src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import runRouter from './routes/run.route';

dotenv.config();

const app = express();
const port = process.env.PORT ?? 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Use the routes defined in run.route.ts
app.use('/run', runRouter);

// Simple root route for testing
app.get('/', (req: Request, res: Response) => {
  res.send('Smart Auto Healer API is running');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
