import app from './app.js';
import env from './config/env.js';
import logger from './config/logger.js';
import prisma from './config/prisma.js';

async function start() {
  try {
    await prisma.$connect();
    logger.info('Connexion PostgreSQL etablie');

    const server = app.listen(env.port, () => {
      logger.info(`Serveur demarre sur ${env.apiUrl} (env: ${env.nodeEnv})`);
      logger.info(`Documentation : ${env.apiUrl}/api/docs`);
    });

    const shutdown = async (signal) => {
      logger.info(`${signal} recu, arret en cours...`);
      server.close(async () => {
        await prisma.$disconnect();
        process.exit(0);
      });
    };
    process.on('SIGINT', () => shutdown('SIGINT'));
    process.on('SIGTERM', () => shutdown('SIGTERM'));
  } catch (err) {
    logger.error(`Echec du demarrage : ${err.message}`);
    await prisma.$disconnect();
    process.exit(1);
  }
}

process.on('unhandledRejection', (reason) => logger.error(`UnhandledRejection: ${reason}`));
process.on('uncaughtException', (err) => {
  logger.error(`UncaughtException: ${err.message}\n${err.stack}`);
  process.exit(1);
});

start();
