import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as $ from 'jquery';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

    TITLE = "AUG-19";
    BG_LIST:any[] = [{"ID":1, "BG": "bg-primary", "BTN":"btn-primary"}, 
                     {"ID":2, "BG": "bg-danger", "BTN":"btn-danger"}, 
                     {"ID":3, "BG": "bg-dark", "BTN":"btn-dark"}, 
                     {"ID":4, "BG": "bg-info", "BTN":"btn-info"}, 
                     {"ID":5, "BG": "bg-secondary", "BTN":"btn-secondary"},
                     {"ID":6, "BG": "bg-success", "BTN":"btn-success"}
                    ];

    
    MENU_LIST: any[] = [
      {"ID":2, "MENU": "awebp", "DISPLAY":"AWEBP", "routerLink": "awebp", "active": true},
      {"ID":1, "MENU": "java", "DISPLAY":"JAVA", "routerLink": "java" },
      {"ID":3, "MENU": "springcore", "DISPLAY":"SPRING", "routerLink": "springcore" },
      {"ID":4, "MENU": "projectref", "DISPLAY":"PROJECT", "routerLink": "projectref" },
    ]; 

    private SEL_BG_REF_OBJ = this.BG_LIST[0];
    private SEL_BG_REF_OBJ_SOURCE = new BehaviorSubject<any>(this.SEL_BG_REF_OBJ);
    public SEL_BG_REF_OBJ_AS_OBSERABLE = this.SEL_BG_REF_OBJ_SOURCE.asObservable();

    private SEL_MENU_OBJ = this.MENU_LIST[0];
    private SEL_MENU_REF_OBJ_SOURCE = new BehaviorSubject<any>(this.SEL_MENU_OBJ);
    public SEL_MENU_REF_OBJ_AS_OBSERABLE = this.SEL_MENU_REF_OBJ_SOURCE.asObservable();

    public constructor() { }

    public updateSelBgRef(item): void {
      this.SEL_BG_REF_OBJ_SOURCE.next(item);
    }

    public updateSelMenu(routerUrl): void {

      const tempUrl = routerUrl.replace("/", "");
      const elem = _.find(this.MENU_LIST, {"routerLink" : tempUrl});

      this.SEL_MENU_REF_OBJ_SOURCE.next(elem);
    } 

    public toggleCollapse(refel, demoRef) {
      if(demoRef.YOUTUBE_LINK) {
        const dataId = refel.getAttribute('data-id');
        $('#' + dataId).collapse('toggle');
  
        const youcode = demoRef.YOUTUBE_LINK.replace('https://youtu.be/', '');
        const sret = 'https://www.youtube.com/embed/' + youcode;
  
        $('#' + dataId).children()[0].innerHTML = `
              <iframe class="embed-responsive-item" src="${sret}" allowfullscreen></iframe>
            `;
      }
    }
}
