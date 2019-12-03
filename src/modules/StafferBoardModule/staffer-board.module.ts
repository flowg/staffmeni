/**
 * Angular imports
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * App imports
 */
import { StafferBoardComponent } from './staffer-board/staffer-board.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule( {
    declarations: [ StafferBoardComponent, DashboardComponent ],
    imports: [
        CommonModule
    ]
} )
export class StafferBoardModule {
}
