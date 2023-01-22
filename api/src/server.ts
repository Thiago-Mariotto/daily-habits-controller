import cors from '@fastify/cors';
import { PrismaClient } from '@prisma/client';
import Fastify from 'fastify';

const PORT = process.env.PORT || '3001';
const prisma = new PrismaClient();
const app = Fastify();
app.register(cors);

app.get('/habits', async () => {
  const habits = await prisma.habit.findMany();
  return habits
});

app.listen({
  port: Number(PORT)
}).then(() => console.log(`listening on port ${PORT}`));