import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FlexLayoutModule} from '@angular/flex-layout';
import { HighlightModule } from 'ngx-highlightjs';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

// ICONS
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatListModule} from '@angular/material/list';


import {RouteModule, RoutingComponents} from './route.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HighlightModule.forRoot(),

    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,

    RouteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
