/*
Generar la versión universal:
  ng generate universal --client-project demomaterial
Configurar un servidor NodeJS Express para ejecutar los paquetes de la aplicación Angular Universal:
  npm install --save express @types/express @nguniversal/express-engine @nguniversal/module-map-ngfactory-loader
  npm install ts-loader –g
Configurar en la sección scripts de package.json:
(sustituir demomaterial por el nombre de la aplicación !!!)
  "build:client-app:prod": "./node_modules/.bin/ng build --prod --aot",
  "build:server-app:prod": "./node_modules/.bin/ng run demomaterial:server",
  "build:ssr": "npm run build:client-app:prod && npm run build:server-app:prod",
  "start:ssr": "ts-node ./server-ssr.ts",
Construir el paquete:
  npm run build:ssr
Ejecutar el servidor:
  npm run start:ssr
*/
import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import { enableProdMode } from '@angular/core';
// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';
// Import module map for lazy loading
import { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import * as express from 'express';
import { join} from 'path';

// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();
// Express server
const app = express();

const PORT = process.env.PORT || 4000;
/*
 !!!! Reemplazar demomaterial por el nombre de la aplicación !!!
*/
const DIST_FOLDER = join(process.cwd(), 'dist/demomaterial');

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
/*
 !!!! Reemplazar demomaterial por el nombre de la aplicación !!!
*/
const { AppServerModuleNgFactory, LAZY_MODULE_MAP } = require('./dist/demomaterial-server/main');

// Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory,
  providers: [provideModuleMap(LAZY_MODULE_MAP)]
}));
app.set('view engine', 'html');
app.set('views', DIST_FOLDER);

// Example Express Rest API endpoints
app.get('/api/**', (req, res) => {
  // …
});
// Server static files from /app
app.get('*.*', express.static(DIST_FOLDER, { maxAge: '1y'}));

// All regular routes use the Universal engine
app.get('*', (req, res) => { res.render('index', { req }); });

// Start up the Node server
app.listen(PORT, () => { console.log(`Node Express on http://localhost:${PORT}`); });
