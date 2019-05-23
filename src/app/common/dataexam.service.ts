import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataexamService {

  BASE_URL_DEMO = `https://dacexam.github.io/`;
  BASE_URL_SOURCE = `https://github.com/dacexam/`;

  EXAM_LIST:any[];
  B1LIST:any[];
  B2LIST:any[];

  constructor() { 
    const IDLIST = [
      {"id":1,"rollid":"180840320001","show":true},
      {"id":2,"rollid":"180840320002","show":false},
      {"id":3,"rollid":"180840320003","show":true},
      {"id":4,"rollid":"180840320004","show":true},
      {"id":5,"rollid":"180840320005","show":false},
      {"id":6,"rollid":"180840320006","show":true},
      {"id":7,"rollid":"180840320007","show":true},
      {"id":8,"rollid":"180840320008","show":false},
      {"id":9,"rollid":"180840320009","show":true},
      {"id":10,"rollid":"180840320010","show":false},
      {"id":11,"rollid":"180840320011","show":false},
      {"id":12,"rollid":"180840320012","show":false},
      {"id":13,"rollid":"180840320013","show":true},
      {"id":14,"rollid":"180840320014","show":true},
      {"id":15,"rollid":"180840320015","show":true},
      {"id":16,"rollid":"180840320016","show":true},
      {"id":17,"rollid":"180840320017","show":true},
      {"id":18,"rollid":"180840320018","show":true},
      {"id":19,"rollid":"180840320019","show":false},
      {"id":20,"rollid":"180840320020","show":true},
      {"id":21,"rollid":"180840320021","show":true},
      {"id":22,"rollid":"180840320022","show":false},
      {"id":23,"rollid":"180840320023","show":false},
      {"id":24,"rollid":"180840320024","show":false},
      {"id":25,"rollid":"180840320025","show":false},
      {"id":26,"rollid":"180840320026","show":true},
      {"id":27,"rollid":"180840320027","show":true},
      {"id":28,"rollid":"180840320028","show":false},
      {"id":29,"rollid":"180840320029","show":true},
      {"id":30,"rollid":"180840320030","show":true},
      {"id":31,"rollid":"180840320031","show":true},
      {"id":32,"rollid":"180840320032","show":false},
      {"id":33,"rollid":"180840320033","show":false},
      {"id":34,"rollid":"180840320034","show":true},
      {"id":35,"rollid":"180840320035","show":false},
      {"id":36,"rollid":"180840320036","show":true},
      {"id":37,"rollid":"180840320037","show":false},
      {"id":38,"rollid":"180840320038","show":true},
      {"id":39,"rollid":"180840320039","show":true},
      {"id":40,"rollid":"180840320040","show":false},
      {"id":41,"rollid":"180840320041","show":false},
      {"id":42,"rollid":"180840320042","show":false},
      {"id":43,"rollid":"180840320043","show":true},
      {"id":44,"rollid":"180840320044","show":false},
      {"id":45,"rollid":"180840320045","show":true},
      {"id":46,"rollid":"180840320046","show":true},
      {"id":47,"rollid":"180840320047","show":false},
      {"id":48,"rollid":"180840320048","show":true},
      {"id":49,"rollid":"180840320049","show":false},
      {"id":50,"rollid":"180840320050","show":true},
      {"id":51,"rollid":"180840320051","show":false},
      {"id":52,"rollid":"180840320052","show":false},
      {"id":53,"rollid":"180840320053","show":false},
      {"id":54,"rollid":"180840320054","show":true},
      {"id":55,"rollid":"180840320055","show":false},
      {"id":56,"rollid":"180840320056","show":true},
      {"id":57,"rollid":"180840320057","show":false},
      {"id":58,"rollid":"180840320058","show":true},
      {"id":59,"rollid":"180840320059","show":false},
      {"id":60,"rollid":"180840320060","show":true},
      {"id":61,"rollid":"180840320061","show":false},
      {"id":62,"rollid":"180840320062","show":false},
      {"id":63,"rollid":"180840320063","show":true},
      {"id":64,"rollid":"180840320064","show":true},
      {"id":65,"rollid":"180840320065","show":true},
      {"id":66,"rollid":"180840320066","show":false},
      {"id":67,"rollid":"180840320067","show":false},
      {"id":68,"rollid":"180840320068","show":true},
      {"id":69,"rollid":"180840320069","show":false},
      {"id":70,"rollid":"180840320070","show":false},
      {"id":71,"rollid":"180840320071","show":false},
      {"id":72,"rollid":"180840320072","show":false},
      {"id":73,"rollid":"180840320073","show":false},
      {"id":74,"rollid":"180840320074","show":false},
      {"id":75,"rollid":"180840320075","show":false},
      {"id":76,"rollid":"180840320076","show":false},
      {"id":77,"rollid":"180840320077","show":false},
      {"id":78,"rollid":"180840320078","show":false},
      {"id":79,"rollid":"180840320079","show":false},
      {"id":80,"rollid":"180840320080","show":true},
      {"id":81,"rollid":"180840320081","show":false},
      {"id":82,"rollid":"180840320082","show":false},
      {"id":83,"rollid":"180840320083","show":true},
      {"id":84,"rollid":"180840320084","show":true},
      {"id":85,"rollid":"180840320085","show":false},
      {"id":86,"rollid":"180840320086","show":false},
      {"id":87,"rollid":"180840320087","show":false},
      {"id":88,"rollid":"180840320088","show":false},
      {"id":89,"rollid":"180840320089","show":true},
      {"id":90,"rollid":"180840320090","show":true},
      {"id":91,"rollid":"180840320091","show":true},
      {"id":92,"rollid":"180840320092","show":true},
      {"id":93,"rollid":"180840320093","show":false},
      {"id":94,"rollid":"180840320094","show":false},
      {"id":95,"rollid":"180840320095","show":false},
      {"id":96,"rollid":"180840320096","show":false},
      {"id":97,"rollid":"180840320097","show":true},
      {"id":98,"rollid":"180840320098","show":true},
      {"id":99,"rollid":"180840320099","show":false},
      {"id":100,"rollid":"180840320100","show":true},
      {"id":101,"rollid":"180840320101","show":true},
      {"id":102,"rollid":"180840320102","show":false},
      {"id":103,"rollid":"180840320103","show":false},
      {"id":104,"rollid":"180840320104","show":true},
      {"id":105,"rollid":"180840320105","show":true},
      {"id":106,"rollid":"180840320106","show":true},
      {"id":107,"rollid":"180840320107","show":true},
      {"id":108,"rollid":"180840320108","show":false},
      {"id":109,"rollid":"180840320109","show":true},
      {"id":110,"rollid":"180840320110","show":false},
      {"id":111,"rollid":"180840320111","show":false},
      {"id":112,"rollid":"180840320112","show":false},
      {"id":113,"rollid":"180840320113","show":false},
      {"id":114,"rollid":"180840320114","show":true},
      {"id":115,"rollid":"180840320115","show":false},
      {"id":116,"rollid":"180840320116","show":true},
      {"id":117,"rollid":"180840320117","show":false},
      {"id":118,"rollid":"180840320118","show":false},
      {"id":119,"rollid":"180840320119","show":false},
      {"id":120,"rollid":"180840320120","show":true},
      {"id":121,"rollid":"180840320121","show":true},
      {"id":122,"rollid":"180840320122","show":true},
      {"id":123,"rollid":"180840320123","show":false},
      {"id":124,"rollid":"180840320124","show":false},
      {"id":125,"rollid":"180840320125","show":true},
      {"id":126,"rollid":"180840320126","show":true},
      {"id":127,"rollid":"180840320127","show":true},
      {"id":128,"rollid":"180840320128","show":false}
    ];
  
    IDLIST.forEach((item)=> {
        item["demo_link"] = `${this.BASE_URL_DEMO}${item.rollid}`;
        item["source_link"] = `${this.BASE_URL_SOURCE}${item.rollid}`;
    });

    this.EXAM_LIST = IDLIST;

    this.B1LIST = [
      {"id":4,"rollid":"180840320004","show":true},
    ]; 

    this.B2LIST = [
      {"id":20,"rollid":"180840320020","show":true},
    ];
  }
}
