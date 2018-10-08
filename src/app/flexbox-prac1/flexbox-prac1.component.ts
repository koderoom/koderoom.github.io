import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-flexbox-prac1',
  templateUrl: './flexbox-prac1.component.html',
  styleUrls: ['./flexbox-prac1.component.css']
})
export class FlexboxPrac1Component implements OnInit {
  common: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    console.log(this.router.url);

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
