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
import { StafferBoardComponent } from './staffer-board/staffer-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';

/**
 * TypeScript entities and constants
 */
const routes: Routes = [
    {
        path: '',
        component: StafferBoardComponent,
        canActivateChild: [ AuthGuard ],
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'staffer',
                loadChildren: () => import('../StafferModule/staffer.module').then( m => m.StafferModule )
            }
        ]
    }
];

@NgModule( {
    imports: [ RouterModule.forChild( routes ) ],
    exports: [ RouterModule ]
} )
export class StafferBoardRoutingModule {
}
