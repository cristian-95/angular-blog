import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  blogTitle:string = "Loucos por Guindastes!!!"

  constructor() { }

  ngOnInit(): void {
  }

}
