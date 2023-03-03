import fastify from 'fastify';
import { categoriesRoutes } from './routes/categories.routes';

export const app = fastify();

app.register(categoriesRoutes, { prefix: 'categories' });
