/**
 * Angular imports
 */
import { Injectable } from '@angular/core';
import {
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router
} from '@angular/router';

/**
 * 3rd-party imports
 */
import {
    Observable,
    of
} from 'rxjs';
import {
    catchError,
    map
} from 'rxjs/operators';

/**
 * App imports
 */
import {
    ConnectionService,
    UserLoggedInResult
} from '../ConnectionModule/connection.service';

@Injectable( {
    providedIn: 'root'
} )
export class AuthGuard implements CanActivateChild {
    constructor( private connectionService: ConnectionService,
                 private router: Router ) {
    }

    canActivateChild(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.connectionService.isUserLoggedIn()
            .pipe(
                map( ( result: UserLoggedInResult ) => result.success ),
                catchError( ( error: UserLoggedInResult ) => {
                    /*
                     * The call to the /me endpoint returned with an error so the user isn't logged in.
                     * Redirect to the landing page without changing the URL in the browser's address bar
                     */
                    this.router.navigate( [ 'connection' ], { skipLocationChange: true } );

                    return of( false );
                } )
            );
    }
}
