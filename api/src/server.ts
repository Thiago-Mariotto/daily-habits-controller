import cors from '@fastify/cors';
import Fastify from 'fastify';
import appRoutes from './routers/router';

const PORT = process.env.PORT || '3001';
const app = Fastify();
app.register(cors);
app.register(appRoutes);
app.listen({
  port: Number(PORT)
}).then(() => console.log(`listening on port ${PORT}`));