import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ObservableMedia } from '@angular/flex-layout';
import { CommondataService } from 'src/app/common/commondata.service';

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

    this.comp.linkDemo = {'title': 'LIVE DEMO', 'url': '#'};
    this.comp.linkSource = {'title': 'SOURCE CODE', 'url': '#'};
    this.comp.linkYoutube = {'title': 'WATCH AT YOUTUBE', 'url': '#'};

    this.media.subscribe((data) => {
      if (data.mqAlias === 'xs') {
        this.comp.linkDemo.title = 'DEMO';
        this.comp.linkSource.title = 'SOURCE';
        this.comp.linkYoutube.title = 'YOUTUBE';
      }
    });

    this.comp.code1 = `
      conainer {
        display:flex;
        justify-conent:center;
        align-items:center;
      }`;

    this.comp.code2 = `
      <div class='temp-class'>
        <div></div>
      </div>
    `;
  }


}
