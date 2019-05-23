import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppConstantsService {

    TITLE = "FEB-19";
    BG_LIST:any[] = [{"ID":1, "BG": "bg-primary", "BTN":"btn-primary"}, 
                     {"ID":2, "BG": "bg-danger", "BTN":"btn-danger"}, 
                     {"ID":3, "BG": "bg-dark", "BTN":"btn-dark"}, 
                     {"ID":4, "BG": "bg-info", "BTN":"btn-info"}, 
                     {"ID":5, "BG": "bg-secondary", "BTN":"btn-secondary"},
                     {"ID":6, "BG": "bg-success", "BTN":"btn-success"}
                    ];

    
    MENU_LIST: any[] = [
      {"ID":2, "MENU": "awebp", "DISPLAY":"AWEBP"},
      {"ID":1, "MENU": "java", "DISPLAY":"JAVA"},
    ]; 

    private SEL_BG_REF_OBJ = this.BG_LIST[0];
    private SEL_BG_REF_OBJ_SOURCE = new BehaviorSubject<any>(this.SEL_BG_REF_OBJ);
    public SEL_BG_REF_OBJ_AS_OBSERABLE = this.SEL_BG_REF_OBJ_SOURCE.asObservable();
    
    public constructor() { }

    public updateSelBgRef(item): void {
      this.SEL_BG_REF_OBJ_SOURCE.next(item);
    }
}
