import { LoginModule } from './../login/login.module';
import { BookmarksPekaoRoutingModule } from './bookmarks-pekao-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [],
    imports: [CommonModule, BookmarksPekaoRoutingModule, LoginModule]
})
export class BookmarksPeakoModule {}
