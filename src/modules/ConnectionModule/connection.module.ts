/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * App imports
 */
import { ConnectionComponent } from './connection/connection.component';

@NgModule( {
    declarations: [ ConnectionComponent ],
    imports: [
        CommonModule
    ]
} )
export class ConnectionModule {
}
