import { NgModule } from '@angular/core';
import { HeadlineComponent } from './components/headline/headline.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [PostListComponent, HeadlineComponent],
  imports: [],
  exports: [PostListComponent],
  providers: [PostService],
})
export class PostListModule {}
