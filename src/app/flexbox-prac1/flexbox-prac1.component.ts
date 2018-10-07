import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexbox-prac1',
  templateUrl: './flexbox-prac1.component.html',
  styleUrls: ['./flexbox-prac1.component.css']
})
export class FlexboxPrac1Component implements OnInit {

  someCode: string;
  constructor() { }

  ngOnInit() {
    this.someCode = `
    conainer {
      display:flex;
      justify-conent:center;
      align-items:center;
    }
    `;
  }


}
