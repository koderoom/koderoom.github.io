import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FlexboxPrac1Component } from './flexbox-prac1/flexbox-prac1.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'flexbox-prac1', component: FlexboxPrac1Component},
  { path: 'page1', component: Page1Component},
  { path: 'page2', component: Page2Component},
  { path: 'page3', component: Page3Component},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class RouteModule { }

export const RoutingComponents = [
  HomeComponent,
  FlexboxPrac1Component,
  Page1Component,
  Page2Component,
  Page3Component,
];

