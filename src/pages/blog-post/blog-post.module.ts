import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogPostPage } from './blog-post';
import { SafeHtmlPipe } from '../../pipes/safe-html/safe-html';

@NgModule({
  declarations: [
    BlogPostPage,
    SafeHtmlPipe
  ],
  imports: [
    IonicPageModule.forChild(BlogPostPage),
  ],
})
export class BlogPostPageModule {}
