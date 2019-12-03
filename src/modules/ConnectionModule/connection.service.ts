/**
 * Angular imports
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * 3rd-party imports
 */
import {
    Observable,
    throwError
} from 'rxjs';

/**
 * TypeScript entities and constants
 */
export enum UserNotLoggedInIssue {
    BAD_CREDENTIALS,
    NOT_REGISTERED
}

export interface UserLoggedInResult {
    success: boolean;
    user?: any;
    issue?: UserNotLoggedInIssue;
}

@Injectable( {
    providedIn: 'root'
} )
export class ConnectionService {
    constructor( private httpService: HttpClient ) {
    }

    isUserLoggedIn(): Observable<UserLoggedInResult> {
        // We would normally return this if we had a real running API
        const request: Observable<UserLoggedInResult> = this.httpService.get<UserLoggedInResult>( '/api/me' );

        const fake: Observable<UserLoggedInResult> = throwError( {
            success: false,
            issue: UserNotLoggedInIssue.BAD_CREDENTIALS
        } );

        return fake;
    }
}
