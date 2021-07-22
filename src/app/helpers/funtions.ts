import { environment } from "src/environments/environment";

export function consolelog(exp) {
  if (environment) console.log(exp)
}

export const redirect = function (to, open = false) { (open) ? window.open(to) : window.location.href = to; }

