import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUserComponent } from './list-user/list-user.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsernameColorDirective } from './username-color.directive';



@NgModule({
  declarations: [ListUserComponent, UserFormComponent, UsernameColorDirective],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[ListUserComponent, UserFormComponent]
})
export class UserModule { }
