import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { SummaryPipe } from './summary.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule, 
    FontAwesomeModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
