import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'page1', component: Page1Component},
  { path: 'page2', component: Page2Component},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, Page1Component, Page2Component]
})
export class RouteModule { }

export const RoutingComponents = [
  HomeComponent,
  Page1Component,
  Page2Component
];

