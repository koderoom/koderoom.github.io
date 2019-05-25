import { Injectable } from "@angular/core";
import { DataService } from "src/app/common/data.service";

@Injectable({
    providedIn: 'root'
})
export class ExtDataService extends DataService {
    AWEBP_CARD_LIST:any[];
    AWEBP_FEATURED_LIST:any[];
    AWEBP_FEATURED_ANGULAR_LIST:any[];

  constructor() { 
    super(); 

    const BASE_URL = "https://koderoom.github.io";
    const BASE_URL_DEMO = `https://koderoom.github.io/feb-19-webdemo`;
    const BASE_URL_SOURCE = `https://github.com/koderoom/feb-19-webdemo`;
    const AWEBP_CARD_LIST = [];
    const AWEBP_FEATURED_LIST = [];
    const AWEBP_FEATURED_ANGULAR_LIST = [];


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
    AWEBP_CARD_LIST.push(cardDay5);


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
    AWEBP_CARD_LIST.push(cardDay4);


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
    AWEBP_CARD_LIST.push(cardDay3);


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
    AWEBP_CARD_LIST.push(cardDay2);
    
    // DAY - 1
    const cardDay1 = {
        "ID" : 1,
        "TITLE" : "Day 1",
        "HEADING" : "Designing layout using Html and CSS",
        "DESC" : `Designing layout using Html and CSS`,

        "DEMO_LIST" : [
            {  
                "ID":1, "TITLE": "HTML Tags Basics", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/1.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/1.html`
            },

            {  
                "ID":2, "TITLE": "CSS Styling - Inline, Internal & External", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/2.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/2.html`
            },

            {  
                "ID":3, "TITLE": "Center Align Element reference to window screen.", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/3.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/3.html`
            },

            {  
                "ID":4, "TITLE": "Vertically divide screen into two sections, and center align children", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/4.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/4.html`
            },

            {  
                "ID":5, "TITLE": "Horizontall divide screen into two sections, and center align children", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/5.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/5.html`,
                "YOUTUBE_LINK": `https://youtu.be/TvWV_W7LzVQ`
            },

            {  
                "ID":6, "TITLE": "CSS Transition", 
                "SOURCE_LINK" : `${BASE_URL_SOURCE}/tree/master/day1/5.html`,
                "DEMO_LINK" : `${BASE_URL_DEMO}/day1/5.html`,
                "YOUTUBE_LINK": `https://youtu.be/TvWV_W7LzVQ`
            },
        ],

        "ASSIGNMENT_LIST" : [
            {"ID":1, "TITLE": "Html Tags Fundatmental - Blocking and Non-Blocking."},
            {"ID":2, "TITLE": "Html Tags Fundatmental - Form Elements and Non - Form Elements."},
            {"ID":3, "TITLE": "CSS Styling - Inline, Internal, External"},
            {"ID":4, "TITLE": "Center align elements"},
            {"ID":5, "TITLE": "Vertical division of screen"},
            {"ID":6, "TITLE": "Horizonatal division of screen"},
            {"ID":7, "TITLE": "Divide screen into four blocks, horizontally first then vertically"},
        ]
    };
    AWEBP_CARD_LIST.push(cardDay1);


    /** FEATURED LIST */
    const featured1= {
        "ID" : 1,
        "TITLE" : "Chat Simulation",
        "SHOW" : true,
        "DEMO_LINK" : `${BASE_URL_DEMO}/day8/chat.html`
    };
    AWEBP_FEATURED_LIST.push(featured1);


    /** FEATURE LIST ANGULAR */
    const featuredAngular5= { "ID" : 1,"TITLE" : "Image Block", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/ZDT7BiEBVBA`};
    AWEBP_FEATURED_ANGULAR_LIST.push(featuredAngular5);

    const featuredAngular4= { "ID" : 1,"TITLE" : "DOM Operation", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/1Yq3wIQOPng`};
    AWEBP_FEATURED_ANGULAR_LIST.push(featuredAngular4);

    const featuredAngular3= { "ID" : 1,"TITLE" : "Static Web Application", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/GHO0cmBJDO4`};
    AWEBP_FEATURED_ANGULAR_LIST.push(featuredAngular3);

    const featuredAngular2= { "ID" : 1,"TITLE" : "Block over image", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/rKeSpZ-rDIE`};
    AWEBP_FEATURED_ANGULAR_LIST.push(featuredAngular2);

    const featuredAngular1= { "ID" : 1,"TITLE" : "Horizonal Blocks", "SHOW" : true, "YOUTUBE_LINK" : `https://youtu.be/TvWV_W7LzVQ`};
    AWEBP_FEATURED_ANGULAR_LIST.push(featuredAngular1);
    

    this.AWEBP_CARD_LIST = AWEBP_CARD_LIST;
    this.AWEBP_FEATURED_LIST = AWEBP_FEATURED_LIST;
    this.AWEBP_FEATURED_ANGULAR_LIST = AWEBP_FEATURED_ANGULAR_LIST;
  }
}