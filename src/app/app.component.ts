import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Post, PostService } from './modules/post/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService],
})
export class AppComponent implements OnInit {
  currentHeadline = 'Headline';
  headline: string = '';
  fetchedPosts: Post[] = [];
  error = '';

  constructor(
    private postService: PostService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.fetchPosts();
    const browserLang = this.translateService.getBrowserLang();
    this.translateService.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  changeHeadline(newHeadline: string): void {
    this.currentHeadline = newHeadline;
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
