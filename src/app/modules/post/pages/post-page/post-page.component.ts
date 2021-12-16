import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';
import { Post, PostService } from '../../post.service';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss'],
})
export class PostPageComponent implements OnInit {
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
    this.translateService.use(environment.defaultLocale);
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

  trackByFn(item): number {
    return item.id;
  }
}
