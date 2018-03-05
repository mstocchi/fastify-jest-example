const fastify = require('fastify')();

fastify.get('/', async (request, reply) => {
  return {
    hello: 'world'
  };
});

const start = async () => {
  try {
    await fastify.listen(3000);
    console.log(`server listening on ${fastify.server.address().port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

process.on('SIGINT', async () => {
  console.log('stopping fastify server');
  await fastify.close();
  console.log('fastify server stopped');
  process.exit(0);
});

start();

module.exports = fastify;
