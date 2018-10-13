import { Component, OnInit } from '@angular/core';
import {ObservableMedia} from '@angular/flex-layout';
import { Title, MetaDefinition, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.css']
})
export class Page3Component implements OnInit {
  defaultbg: any = 'mediumslateblue';
  appbg: any = {};

  constructor(
    public media: ObservableMedia,
    private titleService: Title,
    private metaService: Meta
  ) { }

  ngOnInit() {
    const title = 'Angular | Material | Flexbox Layout | Reponsive Background';
    this.titleService.setTitle(title);

    const metaDescription = {'name' : 'description', 'content' : title};
    const metaKeywords = {'name' : 'keywords', 'content' : 'ANGULAR, MATERIAL, FLEXLAYOUT, RESPONSIVE'};
    this.metaService.updateTag(metaDescription);
    this.metaService.updateTag(metaKeywords);

    this.media.subscribe((data) => {
      if (data.mqAlias === 'xs') {
        this.appbg.background = 'gold';
      } else if (data.mqAlias === 'sm') {
        this.appbg.background = 'chocolate';
      } else if (data.mqAlias === 'md') {
        this.appbg.background = '#009688';
      }  else {
        this.appbg.background = this.defaultbg;
      }
    });
  }

}
