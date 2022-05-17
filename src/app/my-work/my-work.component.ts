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
  }

  java() {
    this.angularHide = ! this.angularHide  }

  all() {
    this.angularHide = ! this.angularHide
    this.javaScriptHide = ! this.javaScriptHide
  }

}
