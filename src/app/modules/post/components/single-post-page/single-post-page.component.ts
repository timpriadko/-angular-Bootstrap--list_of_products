import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Post } from '../../services/post.service';

@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.scss'],
})
export class SinglePostPageComponent {
  currentLang: string = this.translate.currentLang;

  @Input()
  post: Post;

  @Input()
  index: number;

  @Output()
  removePostEvent = new EventEmitter<number>();

  removePost(id: number): void {
    this.removePostEvent.emit(id);
  }

  constructor(public translate: TranslateService) {
    translate.use(this.currentLang);
  }
}
