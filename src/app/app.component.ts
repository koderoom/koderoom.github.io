import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppConstantsService } from 'src/app/common/app-constants.service';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFileCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

import 'bootstrap';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  
  // App title
  public title: string;
  
  // Menu
  public menuList: any;
  public selMenu:any;

  // Background 
  public randomIndex = Math.floor((Math.random() * 6));
  public bgRef: any = {};
  public bgList:any;
  
  // Icons
  public faYoutube = faYoutube;

  public constructor(
    public appConstatnts: AppConstantsService,
    public route: Router
  ) {}

  public ngOnInit(): void {
    this.title = this.appConstatnts.TITLE;

    // MENU LIST
    this.menuList = this.appConstatnts.MENU_LIST;
    this.selMenu = this.menuList[0];

    // BACKGROUND
    this.bgList = this.appConstatnts.BG_LIST;
    this.bgRef = this.bgList[this.randomIndex];
    this.appConstatnts.updateSelBgRef(this.bgRef);
    
    this.appConstatnts.SEL_BG_REF_OBJ_AS_OBSERABLE.subscribe( (bgRef) => {
      setTimeout(() => {
        this.bgRef = bgRef;
      }, 10);
    });

    this.appConstatnts.SEL_MENU_REF_OBJ_AS_OBSERABLE.subscribe( (selMenu) => {
      setTimeout(() => {
        this.selMenu = selMenu;
      }, 50);
    });

  }

  public ngAfterViewInit() {
    $('button').tooltip();
  }

  public uilayout(bgRef, refel) {
    bgRef = bgRef || this.bgList[this.randomIndex];
    this.bgRef = bgRef;

    // update the observer
    this.appConstatnts.updateSelBgRef(this.bgRef);

    // this.toggleDropdown(refel);
    $(refel).next().toggleClass('show');
  }

  

  public toggleDropdown(refel): void {
    $(refel).next().toggleClass('show');
  }


  public toggleMenu(item, refel): void {
    // DISPLAY MENU
    this.selMenu = item;

    // Toggle dropdown 
    this.toggleDropdown(refel);

    // Navigate to next menu
    this.route.navigate([item.routerLink]);
  }
}
