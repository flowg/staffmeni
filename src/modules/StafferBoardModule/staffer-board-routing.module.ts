/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/**
 * App imports
 */
import { StafferBoardComponent } from "./staffer-board/staffer-board.component";

/**
 * TypeScript entities and constants
 */
const routes: Routes = [
    {
        path: '',
        component: StafferBoardComponent,
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class StafferBoardRoutingModule {
}
