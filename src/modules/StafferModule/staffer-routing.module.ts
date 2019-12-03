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
import { AddressComponent } from './address/address.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileComponent } from './profile/profile.component';

/**
 * App imports
 */

/**
 * TypeScript entities and constants
 */
const routes: Routes = [
    {
        path: 'address',
        component: AddressComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class StafferRoutingModule {
}
