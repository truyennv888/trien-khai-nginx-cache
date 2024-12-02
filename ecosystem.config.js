module.exports = {
  apps: [
    {
      name: 'app',
      script: 'node app.js',
      instances: 1,
      autorestart: true,
      watch: false,
      time: true,
      out_file: './logs/out.log',
      error_file: './logs/err.log',
    },
  ],
};
