import { Component, OnInit } from '@angular/core';
//import { defaultCipherList } from 'constants'; wirft fehlker wenn an ist

@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss']
})
export class MyWorkComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  javaScriptHide: boolean = true;
  angularHide: boolean = true;
  allBTN = true;
  angularBTN = true;
  javaBTN = true;


  angular() {
    this.javaScriptHide = ! this.javaScriptHide  // versteckt alle javaScriptHide Elemente(im HTML ngif="javaScriptHide") -> false gesetzt
    this.angularBTN = ! this.angularBTN;  // setzt angularBTN auf false(somit andere btn background Color)

    if (this.angularHide == false) {  // falls angularHide versteckt(false) wird es sichtbar gemacht(true) 
      this.angularHide = true;
    }

    if (this.javaBTN == false) {  // falls javaBTN rot eingefärbt(false) wird er schwarz eingefärbt gemacht(true)
      this.javaBTN = true;
    }

    if (this.allBTN == false) { // falls allBTN rot eingefärbt(false) wird er schwarz eingefärbt gemacht(true)
      this.allBTN =  true;
    }
  }

  java() {
    this.angularHide = ! this.angularHide
    this.javaBTN = ! this.javaBTN;

    if (this.javaScriptHide == false) {
      this.javaScriptHide = true;
    }  

    if (this.angularBTN == false) {
      this.angularBTN = true;
    }

    if (this.allBTN == false) {
      this.allBTN =  true;
    }
  }

  all() {
    this.angularHide = ! this.angularHide
    this.javaScriptHide = ! this.javaScriptHide
    this.allBTN = ! this.allBTN;

    if (this.javaScriptHide == false) {
      this.javaScriptHide = true;
    }  

    if (this.angularHide == false) {
      this.angularHide = true;
    }

    if (this.javaBTN == false) {
      this.javaBTN = true;
    }

    if (this.angularBTN == false) {
      this.angularBTN = true;
    }
  }

}
