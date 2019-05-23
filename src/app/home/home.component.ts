import { Component, OnInit, AfterViewInit } from '@angular/core';

import 'bootstrap';
import * as $ from 'jquery';

import { DataService} from '../common/data.service';
import { DataexamService } from 'src/app/common/dataexam.service';
import { AppConstantsService } from 'src/app/common/app-constants.service';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFileCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { ExtDataService } from 'src/app/common/ext.data.service';
import { ActivatedRoute } from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  
  title:string;
  bgRef:any;
  bgList:any;
  menuList: any;
  selMenu:any;
  faYoutube = faYoutube;
  faFileCode = faFileCode;
  faLaptopCode = faLaptopCode;
  randomIndex = Math.floor((Math.random() * 4));

  CARD_LIST:any[];
  FEATURED_LIST:any[];
  FEATURED_ANGULAR_LIST:any[];

  BASE_URL_DEMO:string;
  EXAM_LIST:any[];
  TOPLIST:any[];

  constructor(
    public appConstatnts: AppConstantsService,
    public data: ExtDataService,
    public dataexam: DataexamService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.title = this.appConstatnts.TITLE;

    this.bgList = this.appConstatnts.BG_LIST;
    this.bgRef = this.bgList[this.randomIndex];
    this.appConstatnts.updateSelBgRef(this.bgRef);

    this.menuList = this.appConstatnts.MENU_LIST;
    this.selMenu = this.menuList[0];

    this.CARD_LIST = this.data.AWEBP_CARD_LIST;
    this.FEATURED_LIST = this.data.AWEBP_FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = this.data.AWEBP_FEATURED_ANGULAR_LIST;

    this.BASE_URL_DEMO = this.dataexam.BASE_URL_DEMO;
    this.EXAM_LIST = this.dataexam.EXAM_LIST;
    this.TOPLIST = this.dataexam.B2LIST.concat(this.dataexam.B1LIST);
  }

  public ngAfterViewInit(): void {
    $('a').tooltip();
  }

  public toggleCollapse(refel, demoRef): void {
    if(demoRef.YOUTUBE_LINK) {
      const dataId = refel.getAttribute('data-id');
      $('#' + dataId).collapse('toggle');

      const youcode = demoRef.YOUTUBE_LINK.replace('https://youtu.be/', '');
      const sret = 'https://www.youtube.com/embed/' + youcode;

      $('#' + dataId).children()[0].innerHTML = `
            <iframe class="embed-responsive-item" src="${sret}" allowfullscreen></iframe>
          `;
    }
  }

  public toggleDropdown(refel): void {
    $(refel).next().toggleClass('show');
  }

  public getYoutubeLink(itemRef) {
    if(itemRef.YOUTUBE_LINK) {

      const youcode = itemRef.YOUTUBE_LINK.replace('https://youtu.be/', '');
      const sret = 'https://www.youtube.com/embed/' + youcode;

      return this.sanitizer.bypassSecurityTrustResourceUrl(sret);
    }
  }
  
  
  uilayout(bgRef, refel) {
    bgRef = bgRef || this.bgList[this.randomIndex];
    this.bgRef = bgRef;

    // update the observer
    this.appConstatnts.updateSelBgRef(this.bgRef);

    this.toggleDropdown(refel);
  }

  public toggleAssignment(item): void {
      item.showAssignment = !item.showAssignment;
  } 


  public toggleMenu(item, refel): void {
    this.selMenu = item;

    if(item.MENU === 'awebp') {
      this.CARD_LIST = this.data.AWEBP_CARD_LIST;
      this.FEATURED_LIST = this.data.AWEBP_FEATURED_LIST;
      this.FEATURED_ANGULAR_LIST = this.data.AWEBP_FEATURED_ANGULAR_LIST;
    } else {
      this.CARD_LIST = this.data.CARD_LIST;
      this.FEATURED_LIST = this.data.FEATURED_LIST;
      this.FEATURED_ANGULAR_LIST = this.data.FEATURED_ANGULAR_LIST;
    }

    this.toggleDropdown(refel);
  }

}
