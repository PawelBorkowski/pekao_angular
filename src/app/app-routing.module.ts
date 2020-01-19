import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    loadChildren: './bookmarks-peako/bookmarks-peako.module#BookmarksPeakoModule'
  },
  {
    path: 'login',
    loadChildren: './login/login.module#LoginModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
