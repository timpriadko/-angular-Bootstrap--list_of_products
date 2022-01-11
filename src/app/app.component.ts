import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Post, PostService } from './modules/post/services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService],
})
export class AppComponent implements OnInit {
  currentLang: string = this.translate.currentLang;
  fetchedPosts: Post[] = [];
  error = '';

  constructor(
    private postService: PostService,
    public translate: TranslateService
  ) {
    translate.use(this.currentLang);
  }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.postService.fetchPosts().subscribe(
      (posts) => {
        this.fetchedPosts = posts;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  removePost(id: number): void {
    this.postService.removePost(id).subscribe(() => {
      this.fetchedPosts = this.fetchedPosts.filter((post) => post.id !== id);
    });
  }
}
