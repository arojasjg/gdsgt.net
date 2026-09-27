/**
 * PM2 configuration used by deploy.sh (`pm2 restart ecosystem.config.js`).
 * Next.js reads apps/www/.env.local at build and start time.
 * The port must match the nginx `proxy_pass` in Plesk
 * (docs/estrategia/05-configuracion-produccion.md, section 0).
 */
module.exports = {
  apps: [
    {
      name: 'gds-www',
      cwd: './apps/www',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 9000',
      env: { NODE_ENV: 'production' },
      instances: 1,
      autorestart: true,
      max_memory_restart: '512M',
      out_file: '../../logs/www-out.log',
      error_file: '../../logs/www-error.log',
      time: true,
    },
  ],
};
