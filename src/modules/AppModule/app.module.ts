/**
 * Angular imports
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

/**
 * App imports
 */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StafferBoardModule } from '../StafferBoardModule/staffer-board.module';

@NgModule( {
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        StafferBoardModule,
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [ AppComponent ]
} )
export class AppModule {
}
