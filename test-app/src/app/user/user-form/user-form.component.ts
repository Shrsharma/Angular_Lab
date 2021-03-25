import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  // users:UserModel[]=[];
  constructor(private formBuilder: FormBuilder) { }

  @Input() parentData:string="This is child data from user form ";
  @Output() clickEvent = new EventEmitter();
  // fName: string;
  // lName: string;
  formSubmitted: boolean;
  formControls:any;
  
  userForm: FormGroup;
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      email: ['',Validators.required, Validators.email],
      password: ['', Validators.required, Validators.minLength(6)]

    })
    this.formControls=this.userForm.controls;

    // let user1 = new UserModel();
    // user1.id = 1;
    // user1.name = "abc";
    // this.users.push(user1);
    // let user2 = new UserModel();
    // user2.id = 2;
    // user2.name = "cdf";
    // this.users.push(user2);
    // let user3 = new UserModel();
    // user3.id = 3;
    // user3.name = "xyz";
    // this.users.push(user3);
  }

  // handleInput(event)
  // {
  //   console.log(event);
  // }

  // handleFirstNameInput(event: any) {
  //   console.log(event.target.value);
  //   this.fName=event.target.value;
  // }

  // handleLastNameInput(event: any) {
  //   console.log(event.target.value);
  //   this.lName=event.target.value;
  // }

  // handleFormSubmit(event) {
  //   console.log(event);
  //   this.clickEvent.emit(this.fName+ " " + this.lName);
  // }

  handleFormSubmit() {
    this.formSubmitted=true;
    if(this.userForm.invalid)
    {
      return;
    }
    else{
      alert("Form Submitted");
    }
  }
}

// class UserModel
// {
//   name:string;
//   id:number;
// }

