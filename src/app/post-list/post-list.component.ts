import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post, PostService } from './post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
// implements OnInit
export class PostListComponent {
  @Input()
  posts: Post[] = [];

  @Input()
  headline: string = '';

  @Output()
  newHeadlineEvent = new EventEmitter<string>();

  @Output()
  removePostEvent = new EventEmitter<number>();

  constructor(private postService: PostService) {}

  newHeadline(value: string): void {
    this.newHeadlineEvent.emit(value);
    this.clearInput('newHeadlineInput');
  }

  clearInput(inputId): void {
    let input = <HTMLInputElement>document.getElementById(inputId);
    input.value = '';
  }

  removePost(id: number): void {
    // this.postService.removePost(id).subscribe(() => {
    //   this.posts = this.posts.filter((post) => post.id !== id);
    // });

    this.removePostEvent.emit(id);
  }

  trackByFn(item): number {
    return item.id;
  }
}
