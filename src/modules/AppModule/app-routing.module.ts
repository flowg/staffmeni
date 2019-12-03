/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

/**
 * TypeScript entities and constants
 */
const routes: Routes = [];

@NgModule( {
    imports: [ RouterModule.forRoot( routes, { enableTracing: false } ) ],
    exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
