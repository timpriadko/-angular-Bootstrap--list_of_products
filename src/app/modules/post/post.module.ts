import { NgModule } from '@angular/core';
import { HeadlineComponent } from './components/headline/headline.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [PostListComponent, HeadlineComponent, PostItemComponent],
  imports: [],
  exports: [PostListComponent],
  providers: [PostService],
})
export class PostListModule {}
