import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListPostComponent } from './user/list-post/list-post.component';
import { UserFormComponent } from './user/user-form/user-form.component';


const routes: Routes = [

  {
    path:"Form", component: UserFormComponent
  },

  {
    path:"List", component: ListPostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
