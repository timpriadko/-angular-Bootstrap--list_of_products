import { Component, OnInit } from '@angular/core';
import { Post, PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  error = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.fetchPosts().subscribe(
      (posts) => {
        console.log(posts);
        this.posts = posts;
      },
      (error) => {
        this.error = error.message;
      }
    );
  }

  removePost(id: number) {
    this.postService.removePost(id).subscribe(() => {
      this.posts = this.posts.filter((post) => post.id !== id);
    });
  }

  trackByFn(index, item) {
    return item.id;
  }
}
