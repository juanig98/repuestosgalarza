import { environment } from "src/environments/environment";

export function consolelog(exp) {
  if (environment) console.log(exp)
}
