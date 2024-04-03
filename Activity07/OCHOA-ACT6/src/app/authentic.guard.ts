import { CanActivateFn } from '@angular/router';

export const authenticGuard: CanActivateFn = (route, state) => {
  return true;
};
