import { Component, OnInit } from '@angular/core';
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
  

  ngOnInit(): void {
    AOS.init();
  }

  arrowToSkills() {
    document.getElementById("skills").scrollIntoView({behavior:"smooth"});
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.flipText = true;
    }, 3000);
    //document.getElementById("hide").setAttribute("visibility", "hidden");
  }
}
