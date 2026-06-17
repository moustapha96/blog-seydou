/**
 * PM2 — API Blog Seydou
 *
 * Installation :
 *   cd /var/www/blog-seydou
 *   npm install --prefix backend
 *   npx prisma generate --schema=backend/prisma/schema.prisma
 *   npx prisma migrate deploy --schema=backend/prisma/schema.prisma
 *
 * Demarrage :
 *   pm2 start deploy/ecosystem.config.cjs --env production
 *   pm2 save
 *   pm2 startup
 */
module.exports = {
  apps: [
    {
      name: 'blog-seydou-api',
      cwd: '/var/www/blog/backend',
      script: 'src/server.js',
      interpreter: 'node',
      exec_mode: 'fork',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '512M',
      listen_timeout: 10000,
      kill_timeout: 8000,
      time: true,
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      error_file: '/var/log/pm2/blog-api-error.log',
      out_file: '/var/log/pm2/blog-api-out.log',
      env: {
        NODE_ENV: 'development',
        PORT: 6000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 6000,
        API_URL: 'https://backend-blog.tech-xuma.com',
        CLIENT_URL: 'https://blog.tech-xuma.com',
      },
    },
  ],
};
