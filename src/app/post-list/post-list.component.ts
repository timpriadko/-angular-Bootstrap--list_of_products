import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core/lib/translate.service';
import { Post } from './post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
})
export class PostListComponent implements OnInit {
  @Input()
  posts: Post[] = [];

  @Input()
  headline: string = '';

  headlineInput: string = '';

  @Output()
  newHeadlineEvent = new EventEmitter<string>();

  @Output()
  removePostEvent = new EventEmitter<number>();

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    this.translateService.use(environment.defaultLocale);
  }

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
