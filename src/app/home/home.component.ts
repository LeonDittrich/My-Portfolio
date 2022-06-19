import { Component, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor() { }

  flipText = false;
  flipText2 = false;
  arrowDown = false;
  

  ngOnInit(): void {
    AOS.init();
    delay: 'custom'
  }

  arrowToSkills() {
    document.getElementById("skills").scrollIntoView({behavior:"smooth"});
  }
  
  ngAfterViewInit() {
    setTimeout(() => {
      this.flipText = true;
    }, 4000);

    setTimeout(() => {
      this.arrowDown = true;
    }, 7500);
  }
}
