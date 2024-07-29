import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const cookie=inject(CookieService)
  const checkToken = cookie.get('authToken');
  if(checkToken){
    return true;
  }
  router.navigate(['/register'])
  return false;
};
