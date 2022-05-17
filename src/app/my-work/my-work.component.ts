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


  angular() {
    this.javaScriptHide = ! this.javaScriptHide

    if (this.angularHide == false) {
      this.angularHide = true;
    }
  }

  java() {
    this.angularHide = ! this.angularHide

    if (this.javaScriptHide == false) {
      this.javaScriptHide = true;
    }  
  }

  all() {
    this.angularHide = ! this.angularHide
    this.javaScriptHide = ! this.javaScriptHide

    if (this.javaScriptHide == false) {
      this.javaScriptHide = true;
    }  

    if (this.angularHide == false) {
      this.angularHide = true;
    }
  }

}
