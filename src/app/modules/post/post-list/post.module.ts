import { NgModule } from '@angular/core';
import { PostListComponent } from '../components/post-list/post-list.component';
import { PostService } from './post.service';

@NgModule({
  declarations: [PostListComponent],
  imports: [],
  exports: [PostListComponent],
  providers: [PostService],
})
export class PostListModule {}
