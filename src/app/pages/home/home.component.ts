import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogTitle:string="Loucos por Guindastes"

  getTitle():string{
    return this.blogTitle;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
