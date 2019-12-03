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

/**
 * TypeScript entities and constants
 */
const routes: Routes = [
    {
        path: '',
        component: ConnectionComponent,
        children: [
        ]
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class ConnectionRoutingModule {
}
