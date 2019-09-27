import { Injectable } from '@angular/core';
import { DataService } from 'src/app/common/data.service';

@Injectable({
  providedIn: 'root'
})
export class AwebpService extends DataService {

    public CARD_LIST:any[];
    public FEATURED_LIST:any[];
    public FEATURED_ANGULAR_LIST:any[];

  constructor() { 
    super(); 

    const BASE_URL = "https://koderoom.github.io";
    const BASE_URL_DEMO = `https://koderoom.github.io/aug-19-webdemo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/aug-19-webdemo`;
    const CARD_LIST = [];
    const FEATURED_LIST = [];
    const FEATURED_ANGULAR_LIST = [];

    // DAY - 8
    const cardDay9 = {
        "ID" : 9,
        "TITLE" : "Day 9",
        "HEADING" : "Bootstrap Responsive",
        "DESC" : `Bootstrap and Responsive`,

        "DEMO_LIST" : [
            {  
                "ID":3, "TITLE": "How to make #web #application #responsive using #bootstrap?", 
                "SOURCE_LINK" : `https://github.com/koderoom/kodebook`,
                "DEMO_LINK" : `https://koderoom.github.io/kodebook/`, 
                "YOUTUBE_LINK": `https://youtu.be/qyPFqiM7vlA`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Make application responsive using bootstrap."},
        ]
    };
    CARD_LIST.push(cardDay9);

    // DAY - 8
    const cardDay8 = {
        "ID" : 8,
        "TITLE" : "Day 8",
        "HEADING" : "Live Coding with #Angular, #Bootstrap",
        "DESC" : `Live Coding with #Angular, #Bootstrap`,

        "DEMO_LIST" : [
            {  
                "ID":3, "TITLE": "#Live Coding, #Facebook Feature #Simulation in #Angular and #Bootstrap", 
                "SOURCE_LINK" : `https://github.com/koderoom/kodebook`,
                "DEMO_LINK" : `https://koderoom.github.io/kodebook/`, 
                "YOUTUBE_LINK": `https://youtu.be/Qq88kYlnY7Q`
            },

            {  
                "ID":1, "TITLE": "How to use *ngFor and *ngIf in #Angular?", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`, 
                "YOUTUBE_LINK": `https://youtu.be/8vHD2OOfgFU`
            },

            {  
                "ID":2, "TITLE": "Working with List of #UserDefine Class in #Angular", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`, 
                "YOUTUBE_LINK": `https://youtu.be/G-i-5qqdCNE`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Apply loop and codition directive Angular."},
        ]
    };
    CARD_LIST.push(cardDay8);


    // DAY - 7
    const cardDay7 = {
        "ID" : 7,
        "TITLE" : "Day 7",
        "HEADING" : "ES6, TypesScript and Angular Fundamental",
        "DESC" : `ES6, TypesScript and Angular Fundamental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "7.1 Fundamentals of ES6. How to compile and run ES6 program in console?", 
                "YOUTUBE_LINK": `https://youtu.be/_VKZrvaw6Dc`,
                "SOURCE_LINK" : `https://github.com/koderoom/meanstack/blob/master/src/main.js`,
            },

            {  
                "ID":2, "TITLE": "7.2 How to import and export modules in ES6?", 
                "YOUTUBE_LINK": `https://youtu.be/j5MartizMvY`,
                "SOURCE_LINK" : `https://github.com/koderoom/meanstack/blob/master/src/main.js`,
            },

            {  
                "ID":3, "TITLE": "7.3 Fundamentals of TypeScript. How to compile and run #typescript program in console?", 
                "YOUTUBE_LINK": `https://youtu.be/kbSf2OSVPso`,
                "SOURCE_LINK" : `https://github.com/koderoom/meanstack/blob/master/src/ts/main.ts`,
            },

            {  
                "ID":4, "TITLE": "7.4 Hello Angular. How to #setup #first #Angular project.", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`,
                "YOUTUBE_LINK": `https://youtu.be/RD7EzEauMd8`
            },
            {  
                "ID":5, "TITLE": "7.5 Fundamentals of #Angular #Project Folder Structure.", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`,
                "YOUTUBE_LINK": `https://youtu.be/LpzQ5-2JYwU`
            },
            {  
                "ID":6, "TITLE": "7.6 Data Binding in Angular using #interpolation", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`,
                "YOUTUBE_LINK": `https://youtu.be/lkY_g_82o_I`
            },
            {  
                "ID":7, "TITLE": "7.7 Let's Implement Simple Counter in Angular, using Data Binding. (Interpolation and View to Controller.)", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`,
                "YOUTUBE_LINK": `https://youtu.be/V2OchF-3i3k`
            },
            {  
                "ID":8, "TITLE": "7.8 Basics of App Module in #Angular",
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`, 
                "YOUTUBE_LINK": `https://youtu.be/Y_IZCcF3Y3A`
            },
            {  
                "ID":9, "TITLE": "7.9 Bi-Directional Data Binding in #Angular.", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`, 
                "YOUTUBE_LINK": `https://youtu.be/XVRiZ5Zjk7g`
            },
            {  
                "ID":10, "TITLE": "7.10 Integrate #bootstrap in #angular", 
                "SOURCE_LINK" : `https://github.com/koderoom/angular-first`,
                "DEMO_LINK" : `https://koderoom.github.io/angular-first/`, 
                "YOUTUBE_LINK": `https://youtu.be/a-UacGK1hDA`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Compile And Run ES6 program"},
            {"ID":2, "TITLE": "Compile And Run TS program"},
            {"ID":3, "TITLE": "Setup Angular Project"},
            {"ID":4, "TITLE": "Practice Data Binding"},
            {"ID":5, "TITLE": "Integrate Bootstrap into project"},
        ]
    };
    CARD_LIST.push(cardDay7);


    // DAY - 6
    const cardDay6 = {
        "ID" : 6,
        "TITLE" : "Day 6",
        "HEADING" : "NODEJS, NPM Fundatemental",
        "DESC" : `NODEJS, NPM Fundatemental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "6.1 How to install and setup NodeJS?", 
                "YOUTUBE_LINK": `https://youtu.be/njeoystjCqo`
            },

            {  
                "ID":2, "TITLE": "6.2 How to setup nodejs and web project using NPM?", 
                "YOUTUBE_LINK": `https://youtu.be/kMLkQetzxgA`
            },

            {  
                "ID":3, "TITLE": "6.3 How to install module/package using NPM. [Install bootstrap and lite-server]", 
                "YOUTUBE_LINK": `https://youtu.be/Oc6dlujaI5w`
            },

            {  
                "ID":4, "TITLE": "6.4 How to configure, start and access #lite-server for web project?", 
                "YOUTUBE_LINK": `https://youtu.be/mM2SF3SgyiI`
            },
            {  
                "ID":5, "TITLE": "6.5 How to use #bootstrap and #fontawesome css installed using NPM?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/3.html`,
                "YOUTUBE_LINK": `https://youtu.be/sXclxxCjG_A`
            },
            {  
                "ID":6, "TITLE": "6.6 JSON handson session", 
                "YOUTUBE_LINK": `https://youtu.be/q1Ck1UUlMWo`
            },
            {  
                "ID":7, "TITLE": "6.7 Implement like and subscribe, make it interactive using client side #javascript for each dynamic post.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day6/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day6/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/X1pFgCJgtgU`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Install NodeJS and make your project NodeJS aware."},
        ]
    };
    CARD_LIST.push(cardDay6);

    // DAY - 4
    const cardDay5 = {
        "ID" : 5,
        "TITLE" : "Day 5",
        "HEADING" : "Post Perview and Dymaick Block of Image",
        "DESC" : `Post Perview and Dymaick Block of Image`,

        "DEMO_LIST" : [
            {  
                "ID":5, "TITLE": "Adding Like, Subscribe and Comment option for each block. (Adding icons with button)", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/3.html`,
                "YOUTUBE_LINK": `https://youtu.be/OKEkZvygNlw`
            },

            {  
                "ID":4, "TITLE": "Part 2 - Post Preview and add dynamic block of Video using Javascript.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/SeeVQQGASLA`
            },

            {  
                "ID":3, "TITLE": "Part 1 - Post and Preview Video block UI Simulation.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/Dnhp-0IvR_8`
            },

            {  
                "ID":2, "TITLE": "Part 2 - Post Preview and add dynamic block of image using Javascript.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/7WW4s00o5Hg`
            },
            {  
                "ID":1, "TITLE": "Part 1 - Post Preview Image UI Simulation", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day5/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day5/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/ZDT7BiEBVBA`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "HTML Image Element, SRC Attribute, ObjectFit Style Attribute"},
            {"ID":2, "TITLE": "URL, converting fileobject as url."},
        ]
    };
    CARD_LIST.push(cardDay5);


    // DAY - 4
    const cardDay4 = {
        "ID" : 4,
        "TITLE" : "Day 4",
        "HEADING" : "Bootstrap CSS Framework, Document Object and jQuery Library.",
        "DESC" : `Bootstrap CSS Framework, Document Object and jQuery Library.`,

        "DEMO_LIST" : [
            {  
                "ID":7, "TITLE": "Part 4 Add DOM operation to using #document and #jQuery in the Application.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/3.html`,
                "YOUTUBE_LINK": `https://youtu.be/kgXJXdMROB0`
            },

            {  
                "ID":6, "TITLE": "Part 3 - Application layout design using CSS framework Bootstrap. (Add Input Box)", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/gfSDy7Tkta0`
            },

            {  
                "ID":6, "TITLE": "Part 3 - Application layout design using CSS framework Bootstrap. (Add Input Box)", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/gfSDy7Tkta0`
            },

            {  
                "ID":5, "TITLE": "Part 2 - Application layout design using CSS framework Bootstrap. (Add Main Section)", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/vwn__Ep7bvI`
            },

            {  
                "ID":4, "TITLE": "Part 1 - Application layout design using CSS framework Bootstrap. (Add Navbar)", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/87422PRleTQ`
            },

            {  
                "ID":3, "TITLE": "How to add Bootstrap CSS framework into project and check linked successfully?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/B-oBbN1EQXQ`
            },

            {  
                "ID":2, "TITLE": "How to DOM operation using jQuery?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/yPDz58gXgmI`
            },

            {  
                "ID":1, "TITLE": "How to add jQuery into project, and cross check linked successfully?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day4/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day4/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/CtykJZ12VAA`
            },

        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "jQuery DOM Operation"},
            {"ID":2, "TITLE": "Layout design using Bootstrap."},
        ]
    };
    CARD_LIST.push(cardDay4);


    // DAY - 3
    const cardDay3 = {
        "ID" : 3,
        "TITLE" : "Day 3",
        "HEADING" : "Document Object and Client Side JavaScript",
        "DESC" : `Document Object and Client Side JavaScript`,

        "DEMO_LIST" : [
            {  
                "ID":6, "TITLE": "DOM operation, Add New Element/Node with dynamic value, reading data from Input Element. ", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day3/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/1Yq3wIQOPng`
            },

            {  
                "ID":5, "TITLE": "DOM operation, Add New Element/Node with static value, using #document #cloneNode method.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day3/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/i46tWyNkZXI`
            },

            {  
                "ID":4, "TITLE": "DOM operation, Add New Node using #document #createElement method.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day3/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/3USAMyO8ClI`
            },

            {  
                "ID":3, "TITLE": "DOM operation, Update Element/Node and change the style of toolbar.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day3/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/ssY-rmB5TCo`
            },

            {  
                "ID":2, "TITLE": "Fundamental of #document object in #JavaScript and its utility method.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day3/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/ZZgf6nSsI_U`
            },

            {  
                "ID":1, "TITLE": "How to add #JavaScript in #HTML and invoke function onclick of HTML Element?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day3/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day3/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/r3577xqGzQU`
            },
            
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Document Object Study"},
            {"ID":2, "TITLE": "DOM Acesss Object"},
            {"ID":3, "TITLE": "DOM Modify Object"},
            {"ID":4, "TITLE": "DOM Add New Object"},
            {"ID":5, "TITLE": "DOM Add Remove Object"},
        ]
    };
    CARD_LIST.push(cardDay3);


    // DAY - 2
    const cardDay2 = {
        "ID" : 2,
        "TITLE" : "Day 2",
        "HEADING" : "Applying the learning of HTML and CSS",
        "DESC" : `Applying the learning of HTML and CSS`,

        "DEMO_LIST" : [
            {  
                "ID":10, "TITLE": "Link external javascript with HTML and call js function onclick of button.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/7.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/7.html`,
                "YOUTUBE_LINK": `https://youtu.be/XmaEYvyKf5o`
            },

            {  
                "ID":9, "TITLE": "Create a web application with header and body section with multiple static block.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/6.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/6.html`,
                "YOUTUBE_LINK": `https://youtu.be/GHO0cmBJDO4`
            },

            {  
                "ID":8, "TITLE": "How to use CSS #overflow Property?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/5.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/5.html`,
                "YOUTUBE_LINK": `https://youtu.be/OtmGDiXzg_A`
            },

            {  
                "ID":7, "TITLE": "How to add text block over an Image as background?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/4.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/4.html`,
                "YOUTUBE_LINK": `https://youtu.be/rKeSpZ-rDIE`
            },

            {  
                "ID":6, "TITLE": "How to use linear-gradient for background color?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/41.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/41.html`,
                "YOUTUBE_LINK": `https://youtu.be/2S8g151kd-g`
            },

            {  
                "ID":5, "TITLE": "How to use #background, #background-color, #linear-gradient and #background-image?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/4.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/4.html`,
                "YOUTUBE_LINK": `https://youtu.be/2S8g151kd-g`
            },

            {  
                "ID":4, "TITLE": "Create and design #register page at the center of screen.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/4.html`,
                "YOUTUBE_LINK": `https://youtu.be/vi9wjE5gSZw`
            },

            {  
                "ID":3, "TITLE": "How to fit an image within parent container and make image element interactive?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/4LcdLboFn-k`
            },

            {  
                "ID":2, "TITLE": "How to center align an image in HTML?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/2.html`,
                "YOUTUBE_LINK": `https://youtu.be/1s7a-jETKqg`
            },

            {  
                "ID":1, "TITLE": "Why doesn't height: 100% work to expand divs to the screen height?", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day2/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day2/1.html`,
                "YOUTUBE_LINK": `https://youtu.be/ZKOabqA3xDc`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Link HTML and Javascript"},
            {"ID":2, "TITLE": "Create applicatoin with Header and Body with static blocks"},
            {"ID":3, "TITLE": "How to use CSS Overlow"},
            {"ID":4, "TITLE": "How to add text block over an Image as background?"},
            {"ID":6, "TITLE": "How to use #background, #background-color, #linear-gradient and #background-image?"},
            {"ID":7, "TITLE": "Create and design #register page at the center of screen."},
            {"ID":8, "TITLE": "How to fit an image within parent container and make image element interactive?"},
            {"ID":9, "TITLE": "How to center align an image in HTML?"},
        ]
    };
    CARD_LIST.push(cardDay2);
    
    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "ACTIVE" : true,
        "TITLE" : "Day 1",
        "HEADING" : "HTML & CSS Fundamental",
        "DESC" : `HTML & CSS Fundamental`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "Hello HTML and CSS", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/1.html`
            },
            {  
                "ID":2, "TITLE": "Internal Styling with Html", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/2.html`
            },
            {  
                "ID":3, "TITLE": "External Styling with Html", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/3.html`
            },
            {  
                "ID":4, "TITLE": "Writing name in Google Style using HTML and CSS", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/4.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/4.html`
            },
            {  
                "ID":5, "TITLE": "Working with Height and border css property", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/5.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/5.html`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Write down and decode the first HTML program?"},
            {"ID":2, "TITLE": "Integrate Inline Styling with HTML?"},
            {"ID":3, "TITLE": "Integrate Internal Styling with HTML"},
            {"ID":3, "TITLE": "Integrate External Styling with HTML"},
            {"ID":4, "TITLE": "Study the basics CSS property - background, color, font-family, font-size, font-weight"},
            {"ID":5, "TITLE": "Write your name in Google Style using HTML and CSS?"},
            {"ID":6, "TITLE": "Write your name in Google Style without using Inline CSS?"},
            {"ID":7, "TITLE": "Study the basic CSS property - height, width, border, padding, margin"},
            {"ID":8, "TITLE": "Practical demo using border, height and width"},
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


    /** FEATURE LIST ANGULAR  */
    const featuredAngular6= { "ID" : 1,"TITLE" : "Facebook Simulation", "SHOW" : false, "YOUTUBE_LINK" : `https://youtu.be/Qq88kYlnY7Q`};
    FEATURED_ANGULAR_LIST.push(featuredAngular6);

    const featuredAngular5= { "ID" : 1,"TITLE" : "Image Block", "SHOW" : false, "YOUTUBE_LINK" : `https://youtu.be/ZDT7BiEBVBA`};
    FEATURED_ANGULAR_LIST.push(featuredAngular5);

    const featuredAngular4= { "ID" : 1,"TITLE" : "DOM Operation", "SHOW" : false, "YOUTUBE_LINK" : `https://youtu.be/1Yq3wIQOPng`};
    FEATURED_ANGULAR_LIST.push(featuredAngular4);

    const featuredAngular3= { "ID" : 1,"TITLE" : "Static Web Application", "SHOW" : false, "YOUTUBE_LINK" : `https://youtu.be/GHO0cmBJDO4`};
    FEATURED_ANGULAR_LIST.push(featuredAngular3);

    const featuredAngular2= { "ID" : 1,"TITLE" : "Block over image", "SHOW" : false, "YOUTUBE_LINK" : `https://youtu.be/rKeSpZ-rDIE`};
    FEATURED_ANGULAR_LIST.push(featuredAngular2);

    const featuredAngular1= { "ID" : 1,"TITLE" : "Horizonal Blocks", "SHOW" : false, "YOUTUBE_LINK" : `https://youtu.be/TvWV_W7LzVQ`};
    FEATURED_ANGULAR_LIST.push(featuredAngular1);
    

    this.CARD_LIST = CARD_LIST;
    this.FEATURED_LIST = FEATURED_LIST;
    this.FEATURED_ANGULAR_LIST = FEATURED_ANGULAR_LIST;
  }
}
