import { Component, OnInit } from '@angular/core';
import { HomeComponent } from 'src/app/pages/home/home.component';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css'],
  providers: [HomeComponent]
})
export class MenuBarComponent implements OnInit {

  blogTitle:string = "We ❤ Guindastes"
  constructor() { }
  ngOnInit(): void {
  }

}
