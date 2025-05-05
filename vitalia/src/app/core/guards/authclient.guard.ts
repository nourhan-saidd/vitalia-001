import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const authclientGuard: CanActivateFn = ( route, state ) =>
{
const _router =inject(Router)

  if ( typeof localStorage !== 'undefined' )
  {
    if (localStorage.getItem('usertoken')!==null)
      {
        return true;
      } else
      {
        _router.navigate(['/register'])
        //navigate to login ----- router
        return false;
    }
}
  else
  {
    return false;
}



};
