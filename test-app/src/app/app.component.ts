import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-app';
  data = "This data is from app component ts"
  //ldata = "  This data for list is from app component ts ";

  message = "Waiting for user to submit form";
  pclass="pmessage";
  pcolor="black";
  decor="underline";
  align="center";

  handleUserFormClickEvent(event) {
    this.message = "Form is submitted by " + event;
  }
}
