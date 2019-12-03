/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * App imports
 */
import { ProfileComponent } from './profile/profile.component';
import { ContactComponent } from './contact/contact.component';
import { AddressComponent } from './address/address.component';
import { StafferRoutingModule } from './staffer-routing.module';

@NgModule( {
    declarations: [
        ProfileComponent,
        ContactComponent,
        AddressComponent
    ],
    imports: [
        CommonModule,
        StafferRoutingModule
    ]
} )
export class StafferModule {
}
