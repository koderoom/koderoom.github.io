import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ObservableMedia } from '@angular/flex-layout';
import { CommondataService } from 'src/app/common/commondata.service';
import { CardActions } from 'src/app/common/app-constants.enum';

@Component({
  selector: 'app-flexbox-prac1',
  templateUrl: './flexbox-prac1.component.html',
  styleUrls: ['./flexbox-prac1.component.css']
})
export class FlexboxPrac1Component implements OnInit {
  common: any = {};
  comp: any = {};

  constructor(
    public media: ObservableMedia,
    private titleService: Title,
    private metaService: Meta,
    private route: ActivatedRoute,
    private router: Router,

    private commonData: CommondataService
  ) {}

  ngOnInit() {
    this.common = this.commonData.common;

    const title = 'CSS | Flexbox | Center align child using css flexbox.';
    this.titleService.setTitle(title);

    const metaDescription = {'name' : 'description', 'content' : title};
    const metaKeywords = {'name' : 'keywords', 'content' : 'CSS, FLEXBOX, CENTER ALIGN, HORIZONTAL AXIS, VERTICAL AXIS, ACROSS AXIS'};
    this.metaService.updateTag(metaDescription);
    this.metaService.updateTag(metaKeywords);

    this.comp.routerLink = '/flexbox-prac1';
    this.comp.title = 'Using CSS Flexbox Layout - Center Align Element Across Axis';

    this.comp.linkDemo = {'title': CardActions.LIVE_DEMO, 'url': '#'};
    this.comp.linkSource = {'title': CardActions.SOURCE_CODE, 'url': '#'};
    this.comp.linkYoutube = {'title': CardActions.WATCH_AT_YOUTUBE, 'url': '#'};

    this.media.subscribe((data) => {
      if (data.mqAlias === 'xs') {
        this.comp.linkDemo.title = CardActions.DEMO;
        this.comp.linkSource.title = CardActions.SOURCE;
        this.comp.linkYoutube.title = CardActions.YOUTUBE;
      }
    });

    this.comp.chipsList = ['CSS', 'Flexbox'];

    this.comp.code1 = `
    <html lang="en">
    <head>
        <style>
            .area {
                height:100%;
                width:100%;
            }

            .make-center{
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .beautify{
                background: tomato;
                color: white;   
                font-size: 100px;
                font-weight: bold;
            }
        </style>
    </head>

    <body>
        <div class="area make-center beautify">
            Hello World
        </div>
    </body>
    </html>`;

  this.comp.code2 = `
    .area {
      height:100%;
      width:100%;
    }
  `;

  this.comp.code3 = `
    .make-center{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `;

  this.comp.code4 = `
    .beautify{
      background: tomato;
      color: white;   
      font-size: 100px;
      font-weight: bold;
    }
  `;

  }


}
