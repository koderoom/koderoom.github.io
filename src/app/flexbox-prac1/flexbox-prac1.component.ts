import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-flexbox-prac1',
  templateUrl: './flexbox-prac1.component.html',
  styleUrls: ['./flexbox-prac1.component.css']
})
export class FlexboxPrac1Component implements OnInit {
  common: any = {};

  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.titleService.setTitle('CSS | Flexbox | Center align child using css flexbox.');

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
