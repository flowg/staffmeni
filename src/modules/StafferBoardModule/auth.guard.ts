/**
 * Angular imports
 */
import { Injectable } from '@angular/core';
import {
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';

/**
 * 3rd-party imports
 */
import { Observable } from 'rxjs';

@Injectable( {
    providedIn: 'root'
} )
export class AuthGuard implements CanActivateChild {
    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        console.log( state );
        return true;
    }
}
