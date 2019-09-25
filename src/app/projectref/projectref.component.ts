import { Component, OnInit, AfterViewInit } from '@angular/core';

import 'bootstrap';
import * as $ from 'jquery';

import { DataexamService } from 'src/app/common/dataexam.service';
import { AppConstantsService } from 'src/app/common/app-constants.service';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFileCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { ProjectrefService } from 'src/app/common/projectref.service';


@Component({
  selector: 'app-projectref',
  templateUrl: '../awebp/awebp.component.html',
  styleUrls: ['../awebp/awebp.component.css']
})
export class ProjectrefComponent implements OnInit, AfterViewInit {

  public bgRef: any = {};

  public faYoutube = faYoutube;
  public faFileCode = faFileCode;
  public faLaptopCode = faLaptopCode;

  public CARD_LIST:any[];
  public FEATURED_LIST:any[];
  public FEATURED_ANGULAR_LIST:any[];

  public BASE_URL_DEMO:string;
  public EXAM_LIST:any[];
  public TOPLIST:any[];

  constructor(
    public appConstatnts: AppConstantsService,
    public data: ProjectrefService,
    public dataexam: DataexamService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.CARD_LIST = this.data.CARD_LIST;
    this.FEATURED_LIST = this.data.FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = this.data.FEATURED_ANGULAR_LIST;

    this.BASE_URL_DEMO = this.dataexam.BASE_URL_DEMO;
    this.EXAM_LIST = this.dataexam.EXAM_LIST;
    this.TOPLIST = this.dataexam.B2LIST.concat(this.dataexam.B1LIST);

    this.appConstatnts.SEL_BG_REF_OBJ_AS_OBSERABLE.subscribe( (bgRef) => {
      setTimeout(() => {
        this.bgRef = bgRef;
      }, 10);
    });

    this.appConstatnts.updateSelMenu(this.router.url);
  }

  public ngAfterViewInit(): void {
    $('a').tooltip();
  }

  public toggleCollapse(refel, demoRef): void {
    if(demoRef.YOUTUBE_LINK) {
      this.appConstatnts.toggleCollapse(refel, demoRef);
    }
  }

}
