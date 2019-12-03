/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

/**
 * App imports
 */
import { ConnectionComponent } from './connection/connection.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LandingComponent } from './landing/landing.component';

/**
 * TypeScript entities and constants
 */
const routes: Routes = [
    {
        path: 'connection',
        component: ConnectionComponent,
        children: [
            {
                path: '',
                component: LandingComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent
            }
        ]
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class ConnectionRoutingModule {
}
