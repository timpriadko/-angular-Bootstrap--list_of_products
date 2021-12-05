import { Component } from '@angular/core';
import { Post, PostService } from './post-list/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PostService],
})
export class AppComponent {
  currentHeadline = 'Headline';
  headline: string = '';
  fetchedPosts: Post[] = [];
  error = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  changeHeadline(newHeadline: string): void {
    console.log(newHeadline);
    this.currentHeadline = newHeadline;
  }

  fetchPosts(): void {
    this.postService.fetchPosts().subscribe(
      (posts) => {
        console.log(posts);
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

    console.log(id);
  }
}
