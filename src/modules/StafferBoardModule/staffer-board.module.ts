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
import { StafferBoardRoutingModule } from './staffer-board-routing.module';

@NgModule( {
    declarations: [ StafferBoardComponent, DashboardComponent ],
    imports: [
        CommonModule,
        StafferBoardRoutingModule
    ]
} )
export class StafferBoardModule {
}
