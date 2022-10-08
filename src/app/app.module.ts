import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogbookDashboardComponent } from './logbook-dashboard/logbook-dashboard.component';

import { FormsModule } from '@angular/forms';
//import { LineCanvasLogbookComponent } from './line-canvas-logbook/line-canvas-logbook.component'; // <-- NgModel lives here
import { CanvasComponent } from './line-canvas-logbook/canvas.component';

@NgModule({
  declarations: [
    AppComponent,
    LogbookDashboardComponent,
    //LineCanvasLogbookComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
