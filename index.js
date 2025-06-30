import express from 'express';
import cors from 'cors';
import { router } from './src/routes/routes.js';
import { errorHandler } from './src/middlewares/error.js';
import { env } from './src/configs/env.js';

const app = express();
const port = env.port;

app.use(cors());

app.use(express.json());
router.use(express.urlencoded({ extended: true }));
app.use('/api', router);

// centralised error handler
app.use(errorHandler);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});