import { isPlatformBrowser } from '@angular/common';
import { HttpInterceptorFn } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { inject, PLATFORM_ID } from '@angular/core';

export const headersInterceptor: HttpInterceptorFn = ( req, next ) =>
  {
    const _PLATFORM_ID = inject( PLATFORM_ID );

    if (isPlatformBrowser(_PLATFORM_ID))
    {
      const token = localStorage.getItem('usertoken');
      if (token)
      {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }

    return next(req);
  };

