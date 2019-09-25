import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpringcoreService {

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

    // DAY - 5
    const cardDay5 = {
        "ID" : 5,
        "TITLE" : "DAY 5",
        "HEADING" : "Integrate Spring and Angular",
        "DESC" : `Integrate Spring and Angular`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "12 - Integrating #ANGULAR and #SPRING project using #AJAX", 
                "YOUTUBE_LINK" : `https://youtu.be/SoiWkKebsYM`,
                "SOURCE_LINK" : "https://github.com/koderoom/augspring/blob/master/demoapp/src/com/spring/HelloSpring.java",
                "SOURCE_LINK1" : "https://github.com/koderoom/angular-ajax-client"
            },

        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Integrate Spring and Angular"},
        ]
    };
    CARD_LIST.push(cardDay5);

    // DAY - 4
    const cardDay4 = {
        "ID" : 4,
        "TITLE" : "DAY 4",
        "HEADING" : "Import Project From GITHUB in VSCODE",
        "DESC" : `Import Project From GITHUB in VSCODE`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "10 - How to download and import #spring project from #github in #Eclipse", 
                "YOUTUBE_LINK" : `https://youtu.be/vichY8pr6n0`,
                "SOURCE_LINK" : "https://github.com/koderoom/augspring"
            },

            {  
                "ID":2, "TITLE": "11 - How to download and import #Angular project from #Github in #VSCODE", 
                "YOUTUBE_LINK" : `https://youtu.be/RLuCnYOxtgo`,
                "SOURCE_LINK" : "https://github.com/koderoom/angular-ajax-client"
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Clone GITHUB Project in VSCODE."},
        ]
    };
    CARD_LIST.push(cardDay4);


    // DAY - 3
    const cardDay3 = {
        "ID" : 3,
        "TITLE" : "DAY 3",
        "HEADING" : "Spring GET AND POST REST API ",
        "DESC" : `Spring GET AND POST REST API `,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "8 - Building REST GET API   Basic concept step by step", 
                "YOUTUBE_LINK" : `https://youtu.be/Yv3swrMsBhA`,
                "SOURCE_LINK" : "https://github.com/koderoom/augspring/blob/master/demoapp/src/com/spring/HelloSpring.java"
            },

            {  
                "ID":2, "TITLE": "9 - Building REST POST API   Basic concept step by step", 
                "YOUTUBE_LINK" : `https://youtu.be/RhIEsosJumI`,
                "SOURCE_LINK" : "https://github.com/koderoom/augspring/blob/master/demoapp/src/com/spring/HelloSpring.java"
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Create GET AND POST REST API in Spring"},
        ]
    };
    CARD_LIST.push(cardDay3);


    // DAY - 2
    const cardDay2 = {
        "ID" : 2,
        "TITLE" : "DAY 2",
        "HEADING" : "Project Config Files and Hello Spring REST API",
        "DESC" : `Project Config Files and Hello Spring REST API`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "4 - Configuration file web xml and spring servlet xml    How to update config files for spring mvc", 
                "YOUTUBE_LINK" : `https://youtu.be/M_XfUgFwNR8`,
                "SOURCE_LINK" : "https://github.com/koderoom/augspring/blob/master/demoapp/WebContent/WEB-INF/web.xml"
            },

            {  
                "ID":2, "TITLE": "5 - Spring configuration update   Add annotation support in spring servlet xml", 
                "YOUTUBE_LINK" : `https://youtu.be/7fgXfLF1wfI`,
                "SOURCE_LINK" : "https://github.com/koderoom/augspring/blob/master/demoapp/WebContent/WEB-INF/spring-servlet.xml"
            },

            {  
                "ID":3, "TITLE": "6 - Write and run first #Spring #REST API   Hello Spring REST API", 
                "YOUTUBE_LINK" : `https://youtu.be/sh7_yuNVkjY`,
                "SOURCE_LINK" : "https://github.com/koderoom/augspring/blob/master/demoapp/src/com/spring/HelloSpring.java"
            },

            {  
                "ID":4, "TITLE": "7 - Resolve View in MVC using RestController Annotation", 
                "YOUTUBE_LINK" : `https://youtu.be/ir2As0H-5RA`,
                "SOURCE_LINK" : "https://github.com/koderoom/augspring/blob/master/demoapp/src/com/spring/HelloSpring.java"
            }
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Create first REST API in Spring"},
        ]
    };
    CARD_LIST.push(cardDay2);


    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "TITLE" : "DAY 1",
        "HEADING" : "Spring Project Setup & MAVEN Fundamental",
        "DESC" : `Spring Project Setup & MAVEN Fundamental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "1 - Create and Run #DynamicWebProject in #Eclipse using #tomcat", 
                "YOUTUBE_LINK" : `https://youtu.be/CvST6UshMDs`,
                "SOURCE_LINK" : `https://github.com/koderoom/augspring/tree/master/demoapp`
            },

            {  
                "ID":2, "TITLE": "2 - Convert #DynamicWebProject to #Maven Project and Add #Spring core dependencies in #Eclipse", 
                "YOUTUBE_LINK" : `https://youtu.be/jkVN83Mp82o`,
                "SOURCE_LINK" : "https://github.com/koderoom/augspring/blob/master/demoapp/pom.xml"
            },

            {  
                "ID":3, "TITLE": "3 - Add Spring MVC dependencies using maven in eclipse", 
                "YOUTUBE_LINK" : `https://youtu.be/n8yieV9-A5o`,
                "SOURCE_LINK" : "https://github.com/koderoom/augspring/blob/master/demoapp/pom.xml"
            }
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Create SPRING Project in Eclipse."},
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
    const featuredAngular2= { "ID" : 1,"TITLE" : "Project Setup", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/CvST6UshMDs`};
    FEATURED_ANGULAR_LIST.push(featuredAngular2);

    const featuredAngular1= { "ID" : 1,"TITLE" : "Spring REST API", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/sh7_yuNVkjY`};
    FEATURED_ANGULAR_LIST.push(featuredAngular1);

    const featuredAngular3= { "ID" : 1,"TITLE" : "Spring & Angular", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/SoiWkKebsYM`};
    FEATURED_ANGULAR_LIST.push(featuredAngular3);


    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
