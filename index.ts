import express,{ Request, Response } from 'express';
import { conection } from './config/db';
import { routerTask } from './routes/task.routes';
import { routerStatus } from './routes/status.routes';
import cors from 'cors';


const app = express();
conection();

app.use(cors())

app.use(express.json());

app.use('/task', routerTask)
app.use('/status/', routerStatus)


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});