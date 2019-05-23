import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppConstantsService } from 'src/app/common/app-constants.service';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import 'bootstrap';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'Aug18Home';
  public bgRef: any = {};
  public faYoutube = faYoutube;

  public constructor(
    public appConstatnts: AppConstantsService,
  ) {}

  public ngOnInit(): void {
    this.appConstatnts.SEL_BG_REF_OBJ_AS_OBSERABLE.subscribe( (bgRef) => {
      setTimeout(() => {
        this.bgRef = bgRef;
      }, 10);
    });
  }

  public ngAfterViewInit() {
    $('button').tooltip();
  }
}
