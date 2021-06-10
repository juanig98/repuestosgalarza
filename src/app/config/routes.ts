/** Archivo de configuración de rutas */

import { environment } from "src/environments/environment";

/** Ruta actual */
export const current_route = window.location.pathname;

/** Ruta actual */
export const route_server = (environment.development) ? 'https://repuestosgalarza.local/' : 'https://repuestosgalarza.com.ar';

/** Ruta de peticiones al servidor */
export const route_web = `${window.location.origin}`;

/** Ruta de peticiones al servidor */
const protocol_api = (environment.development) ? 'https' : 'https';
const dir_api = (environment.development) ? 'repuestosgalarza.local' : 'repuestosgalarza.com.ar';
const port_api = (environment.development) ? '443' : '443';
const pathname_api = (environment.development) ? 'api/v1' : 'api/v1'
export const route_api = `${protocol_api}://${dir_api}:${port_api}/${pathname_api}/`;
