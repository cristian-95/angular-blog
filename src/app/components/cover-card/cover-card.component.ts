import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cover-card',
  templateUrl: './cover-card.component.html',
  styleUrls: ['./cover-card.component.css']
})
export class CoverCardComponent implements OnInit {

  @Input()
  Id:string="0"
  @Input()
  imgUrl:string = ''
  @Input()
  title:string = ''
  @Input()
  description:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
