import { FastifyInstance } from 'fastify';
import { z } from 'zod';

const categories = [];

export async function categoriesRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createCategoryBodySchema = z.object({
      name: z.string(),
      description: z.string(),
    });

    const { name, description } = createCategoryBodySchema.parse(request.body);

    categories.push({
      name,
      description,
    });

    return reply.status(201).send();
  });
}
