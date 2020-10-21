import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import * as spec from '../swagger';

import imageRoute from './server/routes/ImageRoutes';

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 8080;

app.use('/api/v1', imageRoute);

// Swagger
app.use('/', swaggerUi.serve, swaggerUi.setup(spec.default));

// example random route
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to this API.'
}));

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});

export default app;
