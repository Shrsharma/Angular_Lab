import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  constructor() { }
  @Input() listData: string=" This is list data from list component";
  allowDisplay : boolean = true;

  ngOnInit(): void {
  }

}
