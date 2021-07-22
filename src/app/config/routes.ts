/** Archivo de configuración de rutas */

import { environment } from "src/environments/environment";

/** Ruta actual */
export const current_route = window.location.pathname;

/** Ruta de peticiones al servidor */
export const route_web = `/${window.location.origin}`;

/** Ruta de peticiones al servidor */
const protocol_api = (environment.development) ? 'https' : 'https';
const dir_api = (environment.development) ? 'repuestosgalarza.local' : 'repuestosgalarza.local';
const port_api = (environment.development) ? '443' : '443';
export const route_api = `${protocol_api}://${dir_api}:${port_api}/api/v1`;
export const route_api_v2 = `${protocol_api}://${dir_api}:${port_api}/api/v2`;
