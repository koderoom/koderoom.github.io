import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/data.service';
import { DataexamService } from 'src/app/common/dataexam.service';
import { AppConstantsService } from 'src/app/common/app-constants.service';

@Component({
  selector: 'app-dacexam',
  templateUrl: './dacexam.component.html',
  styleUrls: ['./dacexam.component.css']
})
export class DacexamComponent implements OnInit {

  title:any;
  bgRef:any;
  bgList:any[];
  randomIndex = Math.floor((Math.random() * 4));

  BASE_URL_DEMO:string;
  EXAM_LIST:any[];
  B1LIST:any[];
  B2LIST:any[];

  constructor(
    public appConstatnts: AppConstantsService,
    public data: DataService,
    public dataexam: DataexamService
  ) { }


  ngOnInit(): void {
    this.title = this.appConstatnts.TITLE;

    this.bgList = this.appConstatnts.BG_LIST;
    this.bgRef = this.bgList[this.randomIndex];

    this.BASE_URL_DEMO = this.dataexam.BASE_URL_DEMO;
    this.EXAM_LIST = this.dataexam.EXAM_LIST;

    this.B1LIST = this.dataexam.B1LIST;
    this.B2LIST = this.dataexam.B2LIST;
  }

  
  uilayout(bgRef) {
    bgRef = bgRef || this.bgList[this.randomIndex];
    this.bgRef = bgRef;
  }

}
