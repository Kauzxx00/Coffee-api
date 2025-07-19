const fs = require('fs');
const path = require('path');
const { logger } = require("@kauzx/logger");

module.exports = (router, dir) => {
  const routesLoader = (dir) => {
    const routeFiles = fs.readdirSync(dir);

    routeFiles.forEach((file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        routesLoader(filePath);
      } else if (file.endsWith('.js')) {
        try {
          const routeFile = require(filePath);

          if (!routeFile?.name || !routeFile?.run) {
            logger.warn(`O arquivo ${file} não exporta { name, run } corretamente.`);
            return;
          }

          const method = (routeFile.method || 'all').toLowerCase();
          if (!['get', 'post', 'put', 'delete', 'patch', 'all'].includes(method)) {
            logger.warn(`Método HTTP inválido em ${file}: ${routeFile.method}`);
            return;
          }

          router[method](`/${routeFile.name}`, routeFile.run);
          logger.success(`Rota carregada: [${method.toUpperCase()}] ${routeFile.name}`);
        } catch (error) {
          logger.error(`Erro ao carregar rota em: ${filePath}\n`, error);
        }
      }
    });
  };

  routesLoader(path.resolve(dir));
};