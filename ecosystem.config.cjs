module.exports = {
  apps: [
    {
      name: 'Portfolio-V2',
      script: '.output/server/index.mjs',
      env_production: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
}
