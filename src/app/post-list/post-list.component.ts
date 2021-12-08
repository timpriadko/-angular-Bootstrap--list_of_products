import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from './post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent {
  @Input()
  posts: Post[] = [];

  @Input()
  headline: string = '';

  headlineInput: string = '';

  @Output()
  newHeadlineEvent = new EventEmitter<string>();

  @Output()
  removePostEvent = new EventEmitter<number>();

  constructor() {}

  newHeadline(value: string): void {
    this.newHeadlineEvent.emit(value);
    this.headlineInput = '';
  }

  removePost(id: number): void {
    this.removePostEvent.emit(id);
  }

  trackByFn(item): number {
    return item.id;
  }
}
