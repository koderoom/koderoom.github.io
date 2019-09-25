import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectrefService {

  CARD_LIST:any[];
  FEATURED_LIST:any[];
  FEATURED_ANGULAR_LIST:any[];

  constructor() { 
    const BASE_URL = "https://koderoom.github.io";
    const BASE_URL_DEMO = `https://koderoom.github.io/aug-19-demo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/aug-19-demo`;
    const CARD_LIST = [];
    const FEATURED_LIST = [];
    const FEATURED_ANGULAR_LIST = [];

    // DAY - 3
    const cardDay3 = {
        "ID" : 3,
        "TITLE" : "DAY 3",
        "HEADING" : "SPRING JDBC",
        "DESC" : `SPRING JDBC`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Project Ref 9 Spring JDBC", 
                "YOUTUBE_LINK" : `https://youtu.be/2mQKAhoxt2g`,
            },
        ],

        "ASSIGNMENT_LIST" : [
        ]
    };
    CARD_LIST.push(cardDay3);

    // DAY - 2
    const cardDay2 = {
        "ID" : 2,
        "TITLE" : "DAY 2",
        "HEADING" : "RESTFul #GET and #POST using #SPRING #MVC",
        "DESC" : `RESTFul #GET and #POST using #SPRING #MVC`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Project Ref 4 Fronted End Project Setup using #Angular & #Bootstrap", 
                "YOUTUBE_LINK" : `https://youtu.be/5OcbB5Ov3mM`,
            },

            {  
                "ID":2, "TITLE": "Project Ref 5 Fronted End layout design for custom places using #bootstrap", 
                "YOUTUBE_LINK" : `https://youtu.be/huZK_boc-VY`,
            },

            {  
                "ID":3, "TITLE": "Project Ref 6 Fronted End   Working with #FormsModule and #ngModel directive in #Angular", 
                "YOUTUBE_LINK" : `https://youtu.be/aKNHOMGEaEo`,
            },

            {  
                "ID":4, "TITLE": "Project Ref 7 Fronted End   Working with #HttpClientModule and #HttpClient #ajax in #Angular", 
                "YOUTUBE_LINK" : `https://youtu.be/jj5jOjP4ees`,
            },

            {  
                "ID":5, "TITLE": "Project Ref 8 Fronted End   #ajax request on #component load", 
                "YOUTUBE_LINK" : `https://youtu.be/Y_8PQuqR4wU`,
            }
        ],

        "ASSIGNMENT_LIST" : [
        ]
    };
    CARD_LIST.push(cardDay2);


    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "TITLE" : "DAY 1",
        "HEADING" : "RESTFul #GET and #POST using #SPRING #MVC",
        "DESC" : `RESTFul #GET and #POST using #SPRING #MVC`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Project Ref 1 Custom Places #RESTFul #GET API using #SPRING #MVC", 
                "YOUTUBE_LINK" : `https://youtu.be/uHpClbGmpXA`,
            },

            {  
                "ID":2, "TITLE": "Project Ref 2 Custom Places #RESTFul #GET API using #SPRING #MVC", 
                "YOUTUBE_LINK" : `https://youtu.be/Hz8hYlQGYGE`,
            },

            {  
                "ID":3, "TITLE": "Project Ref 3 Custom Places #RESTFul #POST API using #SPRING #MVC", 
                "YOUTUBE_LINK" : `https://youtu.be/YsRSnKh6us8`,
            }
        ],

        "ASSIGNMENT_LIST" : [
        ]
    };
    CARD_LIST.push(cardDay1);


    /** FEATURED LIST */
    const featured1= {
        "ID" : 1,
        "TITLE" : "Chat Simulation",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/day8/chat.html`
    };
    FEATURED_LIST.push(featured1);



    /** FEATURE LIST ANGULAR */
    const featuredAngular1= { "ID" : 1,"TITLE" : "#RESTFul #GET", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/uHpClbGmpXA`};
    FEATURED_ANGULAR_LIST.push(featuredAngular1);

    const featuredAngular2= { "ID" : 2,"TITLE" : "#RESTFul #POST", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/YsRSnKh6us8`};
    FEATURED_ANGULAR_LIST.push(featuredAngular2);

    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
