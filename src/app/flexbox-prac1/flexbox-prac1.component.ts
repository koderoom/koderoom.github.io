import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { ObservableMedia } from '@angular/flex-layout';

@Component({
  selector: 'app-flexbox-prac1',
  templateUrl: './flexbox-prac1.component.html',
  styleUrls: ['./flexbox-prac1.component.css']
})
export class FlexboxPrac1Component implements OnInit {
  common: any = {};

  constructor(
    public media: ObservableMedia,
    private titleService: Title,
    private metaService: Meta,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const title = 'CSS | Flexbox | Center align child using css flexbox.';
    this.titleService.setTitle(title);

    const metaDescription = {'name' : 'description', 'content' : title};
    const metaKeywords = {'name' : 'keywords', 'content' : 'CSS, FLEXBOX, CENTER ALIGN, HORIZONTAL AXIS, VERTICAL AXIS, ACROSS AXIS'};
    this.metaService.updateTag(metaDescription);
    this.metaService.updateTag(metaKeywords);

    this.media.subscribe((data) => {
      
    });

    this.common.code1 = `
      conainer {
        display:flex;
        justify-conent:center;
        align-items:center;
      }`;

    this.common.code2 = `
      <div class='temp-class'>
        <div></div>
      </div>
    `;
  }


}
