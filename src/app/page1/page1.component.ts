import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    const title = 'Flex Box | Center align child using css flexbox.';
    this.titleService.setTitle(title);

    const metaDescription = {'name' : 'description', 'content' : title};
    const metaKeywords = {'name' : 'keywords', 'content' : 'CSS, FLEXBOX'};
    this.metaService.updateTag(metaDescription);
    this.metaService.updateTag(metaKeywords);

  }



}
