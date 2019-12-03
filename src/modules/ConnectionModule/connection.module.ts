/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

/**
 * App imports
 */
import { ConnectionComponent } from './connection/connection.component';
import { ConnectionRoutingModule } from './connection-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LandingComponent } from './landing/landing.component';

@NgModule( {
    declarations: [
        ConnectionComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        LandingComponent
    ],
    imports: [
        CommonModule,
        ConnectionRoutingModule,
        MatCardModule,
        MatButtonModule
    ]
} )
export class ConnectionModule {
}
