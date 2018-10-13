import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    const title = 'Angular | Material | Flexbox Layout';
    this.titleService.setTitle(title);

    const metaDescription = {'name' : 'description', 'content' : title};
    const metaKeywords = {'name' : 'keywords', 'content' : 'ANGULAR, MATERIAL, FLEXLAYOUT'};
    this.metaService.updateTag(metaDescription);
    this.metaService.updateTag(metaKeywords);
  }

}
