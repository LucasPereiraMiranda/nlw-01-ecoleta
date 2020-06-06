import express from 'express';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);

// to install types definitions
// yarn add @types/express -D
// yarn add ts-node -D
// yarn add typescript -D
// yarn typescript
// yarn add ts-node-dev -D

// req.param buscamos um recurso em especifico /:id e obrigatorio
// req.query parametros opcionais responsaveis por paginacao, busca, etc
