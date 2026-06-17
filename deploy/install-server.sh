#!/usr/bin/env bash
# Script d'installation sur Ubuntu/Debian — a adapter puis executer en root ou avec sudo
set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/blog}"
DOMAIN_FRONT="${DOMAIN_FRONT:-blog.tech-xuma.com}"
DOMAIN_API="${DOMAIN_API:-backend-blog.tech-xuma.com}"

echo "==> Creation des repertoires"
mkdir -p "$APP_DIR" /var/log/pm2 /var/www/certbot


echo "==> Activation des sites Nginx"
cp deploy/nginx/blog.tech-xuma.com.conf /etc/nginx/sites-available/
cp deploy/nginx/backend-blog.tech-xuma.com.conf /etc/nginx/sites-available/

ln -sf /etc/nginx/sites-available/blog.tech-xuma.com.conf /etc/nginx/sites-enabled/
ln -sf /etc/nginx/sites-available/backend-blog.tech-xuma.com.conf /etc/nginx/sites-enabled/

echo "==> Certificats SSL (Let's Encrypt)"
if command -v certbot >/dev/null 2>&1; then
  certbot certonly --webroot -w /var/www/certbot \
    -d "$DOMAIN_FRONT" \
    -d "$DOMAIN_API" \
    --agree-tos -m admin@tech-xuma.com --non-interactive || true
fi

echo "==> Backend : dependances Prisma"
cd "$APP_DIR/backend"
npm ci --omit=dev
npx prisma generate
npx prisma migrate deploy

echo "==> PM2"
pm2 start "$APP_DIR/deploy/ecosystem.config.cjs" --env production
pm2 save

echo "==> Test Nginx"
nginx -t
systemctl reload nginx

echo "Termine. Verifiez :"
echo "  https://$DOMAIN_FRONT"
echo "  https://$DOMAIN_API/api/health"
