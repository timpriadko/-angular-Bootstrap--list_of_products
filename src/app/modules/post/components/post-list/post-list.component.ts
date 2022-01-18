import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Post } from '../../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostListComponent {
  @Input()
  posts: Post[] = [];

  @Output()
  removePostEvent = new EventEmitter<number>();

  removePost(id: number): void {
    this.removePostEvent.emit(id);
  }

  trackByFn(item): number {
    return item.id;
  }
}
