import http from 'http';
import cors from 'cors';
import 'dotenv/config';
import express from 'express';
import routes from './routes';
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { swaggerOptions } from './swagger';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerJsDoc(swaggerOptions)));
app.use('/', routes);
app.all('*', (req, res) => res.status(404).json({ error: 'URL not found' }));

const port = Number(process.env.PORT || 3333);
const listener = () => console.log(`--> 🟢 Server Started on port ${port}`);

const server = http.createServer(app);

(async () => {
  console.log('--> 🟠 Starting Server');

  // SERVER
  server.listen(port, listener);
})();
