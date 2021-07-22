import { environment } from "src/environments/environment";

export function devConsoleLog(...string: any) { if (!environment.production) console.log(string) };


