/** Archivo de configuración de rutas */

import { environment } from "src/environments/environment";

/** Ruta actual */
export const current_route = window.location.pathname;

/** Ruta actual */
export const route_server = (environment.development) ? 'http://192.168.1.16:8000' : 'https://api.repuestosgalarza.local/';

/** Ruta de peticiones al servidor */
export const route_web = `/${window.location.origin}`;

/** Ruta de peticiones al servidor */
const protocol_api = (environment.development) ? 'http' : 'https';
const dir_api = (environment.development) ? '192.168.1.16' : 'api.repuestosgalarza.local';
const port_api = (environment.development) ? '8000' : '443';
const pathname_api = (environment.development) ? 'api/v1' : 'api/v1'
export const route_api = `${protocol_api}://${dir_api}:${port_api}/${pathname_api}/`;
